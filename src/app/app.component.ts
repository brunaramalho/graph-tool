import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AppService } from './rest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: FormGroup;

  constructor(fb: FormBuilder, public dialog: MatDialog, private service: AppService) {
    this.options = fb.group({
      n: [3, Validators.min(1)],
    });
  }

  postStatic(n) {
     this.service.postStatic(n).subscribe(
       data => { console.log(data)},
       error => { console.log(error);},
       ()=> console.log("finished.. do something here")// Here call is completed. If you wish to do something 
       // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
     )
   }

   postBlock(adjList) {
    this.service.postBlock(adjList).subscribe(
      data => { console.log(data)},
      error => { console.log(error);},
      ()=> console.log("finished.. do something here")// Here call is completed. If you wish to do something 
      // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
    )
  }

  postChordal(adjList) {
   this.service.postChordal(adjList).subscribe(
     data => { console.log(data)},
     error => { console.log(error);},
     ()=> console.log("finished.. do something here")// Here call is completed. If you wish to do something 
     // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
    )
   }

  openDialog() {
    this.dialog.open(ReconhecimentoDialog);
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

  listHandler() {
    var lines = this.lista.replace(/(\r\n|\n|\r)/gm, "end").split("end")
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
    
    // run ./a.out n finalList
    // vértices começando do zero
  }

  matrixHandler() {
    function convertToAdjList(adjMatrix) {
      return adjMatrix.map(a => a.map((v, i) => v ? i : -1).filter(v => v !== -1))
    }
    var matrix = JSON.parse("[" + this.matriz.replace(/(\r\n|\n|\r)/gm, ", ") + "]");
    var adjList = convertToAdjList(matrix);
    
    var finalList = adjList.length + " "
    var i=0;
    for (i = 0; i < adjList.length; i++) { 
      adjList[i].forEach(adj => {
        finalList += i + " " + adj + " ";
      });
    }

    console.log(finalList);
    
    // run ./a.out n finalList
    // vértices começando do zero
  }
}

@Component({
  selector: 'reconhecimento',
  templateUrl: 'reconhecimento.html',
})
export class ReconhecimentoDialog {}