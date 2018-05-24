function check() {
    let a = document.forms['shaastra']['pswd'].value;
    let b = document.forms['shaastra']['pswdcon'].value;
    let c = document.forms['shaastra']['mobileno'].value;
    let d;
    if( c.length!=10 ) {
        alert("MOBILE NUMBER SHOULD HAVE 10 DIGITS!");
        d=false;
    }
    if( a.length>=6 && a==b ) {
        d=true ;
        document.getElementById(R1).disabled='false';
    } else if ( a.length<6 && a==b ) {
        alert("PASSWORD TOO SHORT!");
        d=false;
    } else {
        alert("PASSWORDS DO NOT MATCH!");
        d=false;
    }
    //if( d==true ) {
    //    document.getElementById(R1).disabled='false';
    //}
}
