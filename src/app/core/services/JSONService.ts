// import { Injectable } from "@angular/core";
//
// @Injectable({providedIn: 'root'})
export class JSONService {
  public path: string = '';

  loadData(path: string) {
    let xhr = new XMLHttpRequest();
    console.log(path)
    xhr.open('GET', path, false);
    xhr.send();
    if (xhr.status !== 200) {
      alert('Error ' + xhr.status + ': ' + xhr.statusText);

    } else {
      //alert(xhr.responseText);
      let output = document.createElement("pre");
      output.textContent = xhr.responseText;
      const parent = document.getElementById("output");
      if (parent && parent.textContent) {
        parent.textContent = '';
      } else {
        if (parent) {
          parent.appendChild(output);
        } else {
          console.error("Error");
        }
      }
    }
  }


}
