var  UserInput = prompt('Enter your choice').toLowerCase();
var baKers = ['cakres', 'biscuts', 'breads',  'cookies', 'muffins', 'ice cakes', 'cakes', 'rusts', ];
var itsAvailable = false;
for (let index = 0; index < baKers.length; index++) {
    if (UserInput === baKers[index]) {
        alert(UserInput +  " Its available " +  'Index no '+ index)
        itsAvailable =  true
    
    }
 

 }




 if (
    itsAvailable !== true

 ){

    alert('Not available for' + " " + UserInput);

} 

