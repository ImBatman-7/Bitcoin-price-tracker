//load the page first 
document.addEventListener("DOMContentLoaded", function(){
                    
    //variables
    var cur;
    var curoptions = "<option value='' >SELECT CURRENCY</option>"

    //get the data 
    fetch("https://blockchain.info/ticker")

    //convert that response to json format
    .then(response => response.json())

    // make use of that data
    .then(data => {
        //console.log(data)
        // for (cur in data){
        //      console.log(cur)
        // }

        //looping through data for getting every currency
            for (cur in data) {
                //adding option tag in select  through looping
                curoptions += "<option value = '"+cur+"' > "+cur+" </option>"
            }


            document.querySelector("#selectors").innerHTML = curoptions;
            document.querySelector("#selectors").options[0].disabled = true;

            //after hititng submit
            document.querySelector('form').onsubmit = function(){
                //selected currency
                var selectedValue = document.querySelector('#selectors').value;
                //console.log(selectedValue)

                // data of selected currency
                var final = data[selectedValue]
                //console.log(final)

                // last amount of selected currency
                var finalLast = final.last
                //console.log(finalLast)

                // formatting string in resulted div
                document.querySelector('#show').innerHTML = `Price of ${selectedValue} is ${finalLast}.`;

                //preventing form from auto submission
                return false;    
            }
    })
});