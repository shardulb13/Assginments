function add(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname');
    let age =  document.getElementById('age');
    let email = document.getElementById('email');
    var country = document.getElementById('country-list');
    var state = document.getElementById('state-list');
    var city = document.getElementById('city-list');

            if( firstname == "" || lastname == "" || age=="" || email=="" || country==""|| state=="" || city==""){
                document.getElementById("e-msg").innerHTML='input field required!';
                document.getElementById("e-msg1").innerHTML='input field required!';
                document.getElementById("e-msg2").innerHTML='input field required!';
                document.getElementById("e-msg3").innerHTML='input field required!';
                document.getElementById("e-msg4").innerHTML='input field required!';
                document.getElementById("e-msg5").innerHTML='input field required!';
                document.getElementById("e-msg6").innerHTML='input field required!';
                return false;
            }
            else{
                var table =document.getElementById('table');
                var row= table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
            
            
                cell1.innerHTML = firstname;
                cell2.innerHTML = lastname.value;
                cell3.innerHTML = age.value;
                cell4.innerHTML = email.value;
                cell5.innerHTML = country.value;
                cell6.innerHTML = state.value;
                cell7.innerHTML = city.value;
                return true;
            
          }  
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

function agevalidation(){
    let age =  document.getElementById('age').value;
    let alertage = document.getElementById('agealert');

    if(age < 18 || age > 100){
        alertage.innerHTML = 'Please enter valid age';
    
    }
    else
    {
        alertage.innerHTML = '';
    }
}

function agenumber(){
    let age1 =  document.getElementById('age').value;
    let alertage1 = document.getElementById('agealert');
    var x = /\D/
    if(age1.match(x)){
        alertage1.innerHTML = 'Please enter in digit';
    }
    else{
        alertage1.innerHTML='';
    }
}

function flength(){
    let firstname = document.getElementById('firstname').value;
    if(firstname.length <= 0){
        let err = document.getElementById('e-msg').innerHTML="Atleast more than 2 Character should be inserted."
    }
    else{
        let err = document.getElementById('e-msg').innerHTML="";
    }
}
function llength(){
    let lastname = document.getElementById('lastname').value;
    if(lastname.length <= 0){
        let err = document.getElementById('e-msg1').innerHTML="Atleast more than 2 Character should be inserted."
    }
    else{
        let err = document.getElementById('e-msg1').innerHTML="";
    }

}
function emailvalidation(){
    let e = document.getElementById('email').value;
    let emailformat = /^[a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3}$/;
		if(!e.match(emailformat)){
			document.getElementById("email-err").innerHTML = "Please fill valid email address";
			return false;
				}else{
					document.getElementById("email-err").innerHTML = "";
				}
}

function defaultdata(){
    let table = document.getElementById("table");
    let row1 = table.insertRow(1);
    let cell1 = row1.insertCell(0);
    let cell2 = row1.insertCell(1);
    let cell3 = row1.insertCell(2);
    let cell4 = row1.insertCell(3);
    let cell5 = row1.insertCell(4);
    let cell6 = row1.insertCell(5);
    let cell7 = row1.insertCell(6);
    cell1.innerHTML = "Alex";
    cell2.innerHTML = "Benajmin";
    cell3.innerHTML = "29";
    cell4.innerHTML = "alex.b@gmail.com";
    cell5.innerHTML = "USA";
    cell6.innerHTML = "NY";
    cell7.innerHTML = "Gerogia";
    let row2 = table.insertRow(2);
    let cel21 = row2.insertCell(0);
    let cel22 = row2.insertCell(1);
    let cel23 = row2.insertCell(2);
    let cel24 = row2.insertCell(3);
    let cel25 = row2.insertCell(4);
    let cel26 = row2.insertCell(5);
    let cel27 = row2.insertCell(6);
    cel21.innerHTML = "tohoma";
    cel22.innerHTML = "yanoma";
    cel23.innerHTML = "35";
    cel24.innerHTML = "toho.yano@gmail.com";
    cel25.innerHTML = "Japan";
    cel26.innerHTML = "Tohoku";
    cel27.innerHTML = "Akita";
    let row3 = table.insertRow(3);
    let cel31 = row3.insertCell(0);
    let cel32 = row3.insertCell(1);
    let cel33 = row3.insertCell(2);
    let cel34 = row3.insertCell(3);
    let cel35 = row3.insertCell(4);
    let cel36 = row3.insertCell(5);
    let cel37 = row3.insertCell(6);
    cel31.innerHTML = "kooku";
    cel32.innerHTML = "fujitsava";
    cel33.innerHTML = "19";
    cel34.innerHTML = "k.fu@gmail.com";
    cel35.innerHTML = "Korea";
    cel36.innerHTML = "Hokkaido";
    cel37.innerHTML = "Kushiro";
    let row4 = table.insertRow(4);
    let cel41 = row4.insertCell(0);
    let cel42 = row4.insertCell(1);
    let cel43 = row4.insertCell(2);
    let cel44 = row4.insertCell(3);
    let cel45 = row4.insertCell(4);
    let cel46 = row4.insertCell(5);
    let cel47 = row4.insertCell(6);
    cel41.innerHTML = "Deepak";
    cel42.innerHTML = "Patel";
    cel43.innerHTML = "31";
    cel44.innerHTML = "deepak01aiyyar@gmail.com";
    cel45.innerHTML = "India";
    cel46.innerHTML = "Gujrat";
    cel47.innerHTML = "Surat";
    let row5 = table.insertRow(5);
    let cel51 = row5.insertCell(0);
    let cel52 = row5.insertCell(1);
    let cel53 = row5.insertCell(2);
    let cel54 = row5.insertCell(3);
    let cel55 = row5.insertCell(4);
    let cel56 = row5.insertCell(5);
    let cel57 = row5.insertCell(6);
    cel51.innerHTML = "Himanshu";
    cel52.innerHTML = "patil";
    cel53.innerHTML = "21";
    cel54.innerHTML = "himanshu.p12@gmail.com";
    cel55.innerHTML = "India";
    cel56.innerHTML = "Maharashtra";
    cel57.innerHTML = "pune";
}