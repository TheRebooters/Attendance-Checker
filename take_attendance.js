

document.getElementById("takeAttendanceBtn").addEventListener("click", function (e) {
    e.preventDefault(); 

    const subjectCode = document.getElementById("subjectCode").value;
    const subjectName = document.getElementById("subjectName").value;
    const branch = document.getElementById("branch").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;
    if(subjectCode !== "" && subjectName !== "" && branch !== "" && year !== "" && semester !== ""){
        alert(subjectCode+"\n"+subjectName+"\n"+branch+"\n"+year+"\n"+semester+"\nSUCCESSFULL");
    }
    else{
        alert("Please Fill Up The Empty Field");
    }


});

