var hospital = [
    { Hospital_Name: 'Narayana Hrudayalaya', F_Name: 'Devi', L_Name: 'Shetty', Education: 'M.D', Age: 70, Place: 'Jayanagar', Departement: 'Cardiologist', Experience: 45, Designation: 'Chairman,Surgeon' },
    { Hospital_Name: 'Narayana Nethralaya', F_Name: 'Bhujang', L_Name: 'Shetty', Education: 'M.D', Age: 69, Place: 'Rajajinagar', Departement: 'Opthalmologist', Experience: 40, Designation: 'Chairman' },
    { Hospital_Name: 'Apollo', F_Name: 'Abhay', L_Name: 'Bhagwat', Education: 'M.B.B.S', Age: 55, Place: 'RR Nagar', Departement: 'Neurology', Experience: 14, Designation: 'Doctor' },
    { Hospital_Name: 'Manipal', F_Name: 'Anju', L_Name: 'Mangla', Education: 'M.S', Age: 37, Place: 'KR Nagar', Departement: 'Dermatologist', Experience: 7, Designation: 'Doctor' },
    { Hospital_Name: 'C V Raman', F_Name: 'Aneesha', L_Name: 'Purple', Education: 'M.B.B.S', Age: 25, Place: 'Indiranagar', Departement: 'Gynecology', Experience: 2, Designation: 'Intern' },
    { Hospital_Name: 'Apollo', F_Name: 'Prajwal', L_Name: 'Mallikajuna', Education: 'M.B.B.S', Age: 22, Place: 'VV Puram', Departement: 'Neurology', Experience: 0, Designation: 'Studing' },
    { Hospital_Name: 'Sunflower', F_Name: 'Rachana', L_Name: 'P', Education: 'M.S', Age: 25, Place: 'RR Nagra', Departement: 'Dentist', Experience: 2, Designation: 'Intern' },
    { Hospital_Name: 'Fortis', F_Name: 'Rachana', L_Name: 'S', Education: 'M.D', Age: 35, Place: 'MG Road', Departement: 'Pediatrics', Experience: 6, Designation: 'Professor' }
];
//let data=hospital.filter((var1)=>{return var1.Age})
//let data=hospital.filter((var1)=>{return var1.Age==70})
//let data=hospital.filter((var1)=>{return var1.Education=='M.D'})
//let data=hospital.filter((var1)=>{return var1.Departement=='Neurology'})
//let data=hospital.filter((var1)=>{return var1.Designation=='Professor'})
//let data=hospital.filter((var1)=>{return var1.F_Name=="Rachana"})
//let data=hospital.filter((var1)=>{return var1.Hospital_Name=='Apollo'})
//let data=hospital.filter((var1)=>{return var1.Place=='RR Nagar'})
//let data=hospital.filter((var1)=>{return var1.Experience==11})
//let data1=hospital.find((var1)=>{return var1.Hospital_Name=='Apollo'})
//let data=people.find((Vall)=>{return Vall.quality2=='intelligent'})
//let data=hospital.find((rr)=>{return rr.Place=='RR Nagar'})
var data = hospital.find(function (varr) { return varr.Education == 'M.D'; });
console.log(data);
