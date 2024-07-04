var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result()
{
  try
     {
        var data=await fetch("https://restcountries.com/v3.1/all");
        var res=await data.json();
        console.log(res);
       for (var i = 0; i <res.length; i++) {
            var col = document.createElement("div")
            col.className = "col-sm-3"
            col.innerHTML = `<div class="card" style="width:12rem;">
            <h5 class="card-title"><b>Country:${res[i].name.common}</b></h5>
            <img src="${res[i].flags.png}" class="card-img-top" alt="...">
           <span class="card-text"><b>Capital:${res[i].capital}</b></span>
           <span class="card-text1"><b>Region:${res[i].region}</b></span>
           <span class="card-text2"><b>Subregion:${res[i].subregion}</b></span>
           <span class="card-text1"><b>Languages:${res[i].languages}</b></span>
           <span class="card-text2"><b>Population:${res[i].population}</b></span>
           <span class="card-text2"><b>Temperature:${res[i].latlng}</b></span>
           </div>`
    
            row.append(col);
            container.append(row);
            document.body.append(container)
    }
   }

   catch(error)
    {
        console.log(error);
    }
}
result();

