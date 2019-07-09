import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AppService } from './rest.service'

@Component({
  selector: 'reconhecimento',
  templateUrl: 'reconhecimento.html',
})
export class PertenceCordalDialog {
  message: String = "É Cordal!"
}

@Component({
  selector: 'reconhecimento',
  templateUrl: 'reconhecimento.html',
})
export class NaoPertenceCordalDialog {
  message: String = "Não é Cordal!"
}

@Component({
  selector: 'reconhecimento',
  templateUrl: 'reconhecimento.html',
})
export class PertenceBlocoDialog {
  message: String = "É Bloco!"
}

@Component({
  selector: 'reconhecimento',
  templateUrl: 'reconhecimento.html',
})
export class NaoPertenceBlocoDialog {
  message: String = "Não é Bloco!"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: FormGroup;
  classForm: FormGroup;
  representationForm: FormGroup;
  typeForm: FormGroup;

  constructor(fb: FormBuilder, public dialog: MatDialog, private service: AppService) {
    this.options = fb.group({
      n: [3, Validators.min(1)],
    });

    this.classForm = fb.group({
      default: ['1']
    })

    this.representationForm = fb.group({
      default: ['1']
    })

    this.typeForm = fb.group({
      default: ['1']
    })
  }

  postStatic(n, listaInput, matrizInput) {
    var matrix = "";
    var list = ""; 
    this.service.postStatic(n).subscribe(
       data => { 
          console.log(data);
          list = data["output"].split("|")[0];
          matrix = data["output"].split("|")[1];
          listaInput.value = list
          matrizInput.value = matrix
        },
       error => { console.log(error);},
     )
   }

   postBlock(adjList) {
    this.service.postBlock(adjList).subscribe(
      data => { 
        console.log(data);
        this.openDialog(data["output"]);
      },
      error => { console.log(error);},
    )
  }

  postChordal(adjList) {
   this.service.postChordal(adjList).subscribe(
     data => { 
       console.log(data);
       this.openDialog(data["output"]);
      },
     error => { console.log(error);},
    )
   }

  openDialog(dialogType) {
    switch (dialogType) {
      case '1':
        console.log("PertenceCordalDialog");
        this.dialog.open(PertenceCordalDialog);
        break;
      case '2':
        console.log("NaoPertenceCordalDialog");
        this.dialog.open(NaoPertenceCordalDialog);
        break;
      case '3':
        console.log("PertenceBlocoDialog");
        this.dialog.open(PertenceBlocoDialog);
        break;
      case '4':
        console.log("NaoPertenceBlocoDialog");
        this.dialog.open(NaoPertenceBlocoDialog);
        break;
    }
  }

  algoritmo = {
    value: "1"
  }

  lista = `1: [2,3]
2: [1]
3: [1]`
  matriz = `[0,1,1]
[1,0,0]
[1,0,0]`

  listHandler(lista) {
    var lines = lista.replace(/(\r\n|\n|\r)/gm, "end").split("end")
    var finalList = lines.length + " "

    lines.forEach(item => {
      var arr = item.replace(/^\s+|\s+$/gm,'').split(":");
      var node = parseInt(arr[0])-1;
      var adjs = arr[1].replace("[", "").replace("]", "").split(",")
      adjs.forEach(adj => {
        var adj_ = parseInt(adj)-1;
        finalList += node + " " + adj_ + " ";
      });
    });

    console.log(finalList);
    return finalList;
  }

  matrixHandler(matriz) {
    function convertToAdjList(adjMatrix) {
      return adjMatrix.map(a => a.map((v, i) => v ? i : -1).filter(v => v !== -1))
    }
    var matrix = JSON.parse("[" + matriz.replace(/(\r\n|\n|\r)/gm, ", ") + "]");
    var adjList = convertToAdjList(matrix);
    
    var finalList = adjList.length + " "
    var i=0;
    for (i = 0; i < adjList.length; i++) { 
      adjList[i].forEach(adj => {
        finalList += i + " " + adj + " ";
      });
    }

    console.log(finalList);
    return finalList;
  }

  go(algoritmo, listaInput, matrizInput) {
    switch (algoritmo) {
      case '1':
        console.log("Reconhecimento");

        var finalList: String;
        switch (this.representationForm.value.default) {
          case '1':
            console.log("Lista");
            finalList = this.listHandler(listaInput.value);
            break;
          case '2':
            console.log("Matriz");
            finalList = this.matrixHandler(matrizInput.value);
            break;
        }
        
        switch (this.classForm.value.default) {
          case '1':
            console.log("Cordal");
            this.postChordal(finalList);
            break;
          case '2':
            console.log("Bloco");
            this.postBlock(finalList);
            break;
        }

        break;

      case '2':
        console.log("Geração");

        switch (this.typeForm.value.default) {
          case '1':
            console.log("Estático");
            this.postStatic(this.options.value.n, listaInput, matrizInput);
            break;
          case '2':
            console.log("Dinâmico");
            console.log("WIP: Ainda sendo implementado");
            break;
        }

        break;
    }
  }
}