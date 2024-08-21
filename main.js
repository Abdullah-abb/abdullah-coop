

async function fetchData() {

try {
     
 const CRNumber = document.getElementById("CSnumber").Value;
console.log(CRNumber);
 document.getElementById("test").innerText=CRNumber;   

const response = await fetch(`http://127.0.0.1:8070/users?numberofCs=${CRNumber}`);
const data = await response.json();


const CRName =data.CRInfo ["CRName"];
document.getElementById('nameofCR').innerText=CRName;


const CRStatus =data.CRInfo ["CRStatus"];
document.getElementById('a1').innerText=CRStatus;


const eCR_Website =data.CRInfo ["eCR_Website"];
document.getElementById('a2').innerText=eCR_Website;


const BusinessType =data.CRInfo ["BusinessType"];
document.getElementById('a3').innerText=BusinessType;


const Capital =data.CRInfo ["Capital"];
document.getElementById('a4').innerText=Capital;


const ZipCode =data.CRInfo ["ZipCode"];
document.getElementById('a5').innerText=ZipCode;


const PHONE1 =data.CRInfo ["PHONE1"];
document.getElementById('a6').innerText=PHONE1;


const  CompanyDuration=data.CRInfo ["CompanyDuration"];
document.getElementById('a7').innerText=CompanyDuration;


const IssueDate =data.CRInfo ["IssueDate"];
document.getElementById('a8').innerText=IssueDate;


const eCR_CityName =data.CRInfo ["eCR_CityName"];
document.getElementById('a9').innerText=eCR_CityName;


const POBOX1 =data.CRInfo ["POBOX1"];
document.getElementById('a10').innerText=POBOX1;


const ExpiryDate =data.CRInfo ["ExpiryDate"];
document.getElementById('a11').innerText=ExpiryDate;

const ISICActivities =data.CRInfo ["ISICActivities"];
document.getElementById('a12').innerText=ISICActivities;


const Address =data.CRInfo ["Address"];
document.getElementById('a13').innerText=Address;


const NationalNo =data.CRInfo ['NationalNo'];
document.getElementById('a14').innerText=NationalNo;
   
  
 } catch(error ){
    console.error('خطأ في الحصول على البيانات:', error);
  } 
}