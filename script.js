const submit = document.querySelector("submit");
const add = document.querySelector(".add");
const content = document.querySelector(".content1");

const generatetemplate = (th,nm) =>{
    
    const html= ` <div class="parallax"></div>
                  <div class="parallax2">
                    <div class="row mx-2 my-4">
                        <div class="leftcolumn">       
                            <div class="ParallaxContent">
                                <p class="mx-4 my-5" style="color: whitesmoke;">${th}</p>           
                             </div>                                  
                        </div>
                        <div class="rightcolumn">
                            <div class="card" style="box-shadow: 0 5px 15px rgb(121, 116, 116);">
                                <div class="side">
                                    <i class="far fa-thumbs-up fa-5x" style=" margin-right: 50px;"></i> <i class="far fa-thumbs-down fa-5x"></i>
                                </div>
                                <p class="mx-2" style="font-family:Courier; font-weight: bold;"><br><br><br>By:- <span style="font-size: 30px; color: red;"> ${nm}</span></p>
                            </div>
                        </div>
                    </div>
                  </div>`;
    content.innerHTML +=html; 
     
}; 

add.addEventListener("submit", e=>{
    e.preventDefault();

    const th = add.addth.value.trim();
    const nm = add.addnm.value.trim();
    
    if(th.length && nm.length){
        generatetemplate(th,nm);
        var rect= e.target.parentElement.getBoundingClientRect();
        scrollTo(rect.x,rect.y)
        add.reset();
    }
});