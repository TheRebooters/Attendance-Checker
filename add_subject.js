document.getElementById("addSubjectForm").addEventListener("submit", function (e) {
    e.preventDefault(); 


    const subjectName = document.getElementById("subjectName").value;

   
    alert(`Subject "${subjectName}" has been added.`);
    
    
    window.location.href = "index.html";
});
