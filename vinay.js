function vinay()
{
if( document.royal.yop.value < "2020" || document.royal.yop.value > "2022")
   {
     alert( "SORRY,...NOT ELIGIBLE FOR REGISTER...!" );
     return false;
   }
if( document.royal.eng.value == "" )
   {
     alert( "Please Select Branch..." );
     
     return false;
   }
if ( ( royal.tech1.checked == false ) && ( royal.tech2.checked == false ) && ( royal.tech3.checked == false )&& ( royal.tech4.checked == false )&& ( royal.tech5.checked == false )&& ( royal.tech6.checked == false )&& ( royal.tech7.checked == false ))
   {
   alert ( "Please choose atleast one Technical skill" );
   return false;
   }


}