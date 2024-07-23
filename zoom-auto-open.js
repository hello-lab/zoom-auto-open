
//this will repeat every 5 seconds

var exec = require('child_process').exec;


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var id,pass
readline.question("Please enter your meeting link or leave it blank for thursday meeting:\n", input => {

if(input!='')
{
	i=input.lastIndexOf('/')
i++
	var id=input.charAt(i++)
	if(!input.lastIndexOf('?')) 
	{
		console.log("Invalid link")
		return;
	}
	else
	{
		

while(i<input.lastIndexOf('?'))
	{
		
		id+=input.charAt(i)
		
		i++

	}
		i=input.lastIndexOf('=')
    i++
		var pass= input.charAt(i)
i++
		while(i<input.length)
			{
				pass+=input.charAt(i)
				i++
			}
		
	}
}


else{
id="71357951217"
pass="RoKq9vC6C1ToTkxVTCay7iNxdzMZHL.1"
}
	inter = setInterval(chkzoom, 10000,id,pass);
})

function chkzoom(id,pass )
{
  

exec('tasklist', function(error, stdout, stderr) {
	 if (error) {  
            console.log(error.stack);  
            console.log('Error code: '+error.code);  
            console.log('Error: '+stderr); 
		 clearInterval(inter)
		 
         }  
var count = (stdout.toLowerCase().match(/cpthost/g) || []).length;
console.clear()

	if(count>0)
console.log("RUNNING\nPRESS Ctrl + C TO EXIT");
	else 
		{


		 console.log("CLOSED OPENNING AGAIN IN 5s\nPRESS Ctrl + C TO EXIT")		
		 //https://us04web.zoom.us/j/79491768815?pwd=bIu1PaLiUv3EnOmC9dlAkW93DaDfEP.1
		 exec('./"Zoom Workplace.lnk" --url="zoommtg://zoom.us/join?action=join&confno='+id+'&pwd='+pass+'”', function(error, stdout, stderr) {
if(error!=null){
	try{
		exec('"Zoom Workplace.lnk" --url="zoommtg://zoom.us/join?action=join&confno='+id+'&pwd='+pass+'”', function(error, stdout, stderr) {
			if(error!=null)
				
			console.log(error)
			})}
			catch(e){
				//console.log(error)
			}
console.log(error)}
})
                 }

})
     
}