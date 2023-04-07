export const searchFunIncompatibility = (e) => {
    let filter = document.getElementById("myInputIncompatibility").value.toUpperCase();
    let myTable = document.getElementById("myTableIncompatibility");
    let tr = myTable.getElementsByTagName('tr')

    for(var i=0; i<tr.length; i++){
      let td = tr[i].getElementsByTagName('td')[0];

      if(td){
        let textValue = td.textContent || td.innerHTML
        if(textValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
  }

  export const searchFunBox = (e) => {
    let filter = document.getElementById("myInputBox").value.toUpperCase();
    let myTable = document.getElementById("myTableBox");
    let tr = myTable.getElementsByTagName('tr')

    for(var i=0; i<tr.length; i++){
      let td = tr[i].getElementsByTagName('td')[0];

      if(td){
        let textValue = td.textContent || td.innerHTML
        if(textValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
  }

  export const searchFunFood = (e) => {
    let filter = document.getElementById("myInputFood").value.toUpperCase();
    let myTable = document.getElementById("myTableFood");
    let tr = myTable.getElementsByTagName('tr')

    for(var i=0; i<tr.length; i++){
      let td = tr[i].getElementsByTagName('td')[0];

      if(td){
        let textValue = td.textContent || td.innerHTML
        if(textValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
  }

  export const searchFunMarket = (e) => {
    let filter = document.getElementById("myInputMarket").value.toUpperCase();
    let myTable = document.getElementById("myTableMarket");
    let tr = myTable.getElementsByTagName('tr')

    for(var i=0; i<tr.length; i++){
      let td = tr[i].getElementsByTagName('td')[0];

      if(td){
        let textValue = td.textContent || td.innerHTML
        if(textValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
  }

  export const searchFunOther = (e) => {
    let filter = document.getElementById("myInputOther").value.toUpperCase();
    let myTable = document.getElementById("myTableOther");
    let tr = myTable.getElementsByTagName('tr')

    for(var i=0; i<tr.length; i++){
      let td = tr[i].getElementsByTagName('td')[0];

      if(td){
        let textValue = td.textContent || td.innerHTML
        if(textValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }
    }
  }

  