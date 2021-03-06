window.onload = function(){

   let tiempo = document.getElementById('tiempo');
   let iniciar = document.getElementById('iniciar');
   let reiniciar = document.getElementById('reiniciar');
   let parar = document.getElementById('parar');
   var inicioIntervalo;
   var segundos=0 , minutos=0 , horas=0;

   iniciar.addEventListener('click',iniciarCronometro);
   parar.addEventListener('click',pararCronometro);
   reiniciar.addEventListener('click',reiniciarCronometro);

   function pararCronometro(){
     window.clearInterval(inicioIntervalo);
   }

   function reiniciarCronometro(){
      segundos = minutos = horas = 0;
      iniciarCronometro();
   }

   function iniciarCronometro()
   {
      //limpio el intervalo
      window.clearInterval(inicioIntervalo);
      //document.getElementById('iniciar').disabled = true;

      inicioIntervalo = setInterval( ()=>
      {
         if(segundos<10)
         {
            if(minutos<10)
            {
               if(horas<10)
               {
                  tiempo.innerHTML = '0'+horas+':0'+minutos+':';
                  tiempo.innerHTML += '0'+segundos;
                  segundos++;
               }else{
                  tiempo.innerHTML = horas+':0'+minutos+':';
                  tiempo.innerHTML += '0'+segundos;
                  segundos++;
               }
            }
            else
            {
               tiempo.innerHTML = '0'+horas+':'+minutos+':';
               tiempo.innerHTML += '0'+segundos;
               segundos++;
            }
         }
         else
         {
            if(horas<10)
            {
               if(minutos<10)
               {
                  tiempo.innerHTML = '0'+horas+':0'+minutos+':';
                  tiempo.innerHTML += segundos;
                  segundos++;
               }
               else
               {
                  tiempo.innerHTML = '0'+horas+':'+minutos+':';
                  tiempo.innerHTML += segundos;
                  segundos++;
               }
            }
            else
            {
               if(minutos<10)
               {
                  tiempo.innerHTML = horas+':0'+minutos+':';
                  tiempo.innerHTML += segundos;
                 segundos++;
               }
               else
               {
                  tiempo.innerHTML = horas+':'+minutos+':';
                  tiempo.innerHTML += segundos;
                  segundos++;
               }
            }
         }

         if(segundos == 60)
         {
            segundos = 0;
            minutos++;
         }
         if(minutos == 60)
         {
            minutos = 0;
            horas++;
         }
      },1000);

   }//cierra funcion iniciarCronometro

}//cierra windowOnload
