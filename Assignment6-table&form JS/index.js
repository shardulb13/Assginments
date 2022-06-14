var rowcount = 1;
function add(){
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var country = document.getElementById('country-list');
    var state = document.getElementById('state-list');
    var city = document.getElementById('city-list');

    var table =document.getElementById('table');
    var row= table.insertRow(rowcount);
    var cell = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);

    cell.innerHTML  = rowcount;
    cell1.innerHTML = firstname.value;
    cell2.innerHTML = lastname.value;
    cell3.innerHTML = country.value;
    cell4.innerHTML = state.value;
    cell5.innerHTML = city.value;
    rowcount++;

    
}

function dropdown(){
    var d1 = document.getElementById('country-list');
    var d2 = document.getElementById('state-list');
    d2.innerHTML='';
    if(d1.value == 'india'){
        console.log('value is working')
        var statelist = ['maharashtra','delhi'];
        
    }
    else if(d1.value == 'uk'){
        var statelist = ['West-England','South-England']
    }

    for(var i=0; i<statelist.length; i++){
        var newoption = document.createElement('option');
        newoption.value = statelist[i];
        newoption.innerHTML = statelist[i];
        d2.options.add(newoption);
    }
    
}
function citydropdown(){
    var state = document.getElementById('state-list');
    var city = document.getElementById('city-list');

    city.innerHTML='';

    if(state.value == 'maharashtra'){
        var citylist = ['Pune','mumbai'];
    
       
    }
    else if(state.value == 'delhi'){
        var citylist = ['new-delhi','gurugram'];
        
    }
    else if(state.value == 'West-England'){
        var citylist = ['london','manchester'];
        
    }
    else if(state.value == 'South-England'){
        var citylist = ['Bristol','Cambridge'];
        
    }

    for(var i=0; i<citylist.length; i++){
        console.log(citylist);
        var newoption = document.createElement('option');
        newoption.value = citylist[i];
        newoption.innerHTML = citylist[i];
        city.options.add(newoption);
    }  
}
