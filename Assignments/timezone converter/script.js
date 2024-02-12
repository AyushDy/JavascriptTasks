
const API= `TMK6YYQFLCU1`;
let dataArray= [ ] ;
const fromTimeZone= document.querySelector('.from-zone');
const toTimeZone =document.querySelector('.to-zone');
const timeField1= document.querySelector('.time1');
const timeField2= document.querySelector('.time2');    
const convertButton= document.querySelector('.convert');
const mainSearch= document.querySelector('#fromSearch');
const filterButton= document.querySelector('.filter');

timeField2.value='Converted Time appears here'

fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=${API}&format=json`)
.then(response => response.json())
.then(data =>{
    dataArray=data.zones;
    updateZones();
})

convertButton.addEventListener('click',function(){
    updateTime();
})

mainSearch.addEventListener('blur',()=>{
    mainSearch.setAttribute('style','display:none;')
})

function updateZones(){
    dataArray.forEach(element => {
        const option =document.createElement('option');
        option.value=element.zoneName;
        option.textContent=element.zoneName+' '+convertToGmt(element.gmtOffset);
        fromTimeZone.appendChild(option);
        const option2= option.cloneNode(true);
        toTimeZone.appendChild(option2);
    });
}

function updateTime(){
    const fromZone= fromTimeZone.value;
    const toZone= toTimeZone.value;
    const fromTime= new Date(timeField1.value);

    const options= {
        timeZone:fromZone,
        hour:'numeric',
        minute:'numeric',
        second: 'numeric',
        day:'numeric',
        month:'numeric',
        year:'numeric'
    };

    const fromOffset = getGMTOffset(fromZone);
    console.log('fromOffset',fromOffset);

    fromTime.setHours(fromTime.getHours());
    fromTime.setMinutes(fromTime.getMinutes()-fromTime.getTimezoneOffset());

    const dateTimeFormat= new Intl.DateTimeFormat('en-US',options);
    const formattedTime= dateTimeFormat.format(fromTime);

    const finalTime=new Date( new Date(fromTime.toLocaleString('en-US',{timeZone:toZone}))-new Date(fromOffset*1000));
    console.log(finalTime.getSeconds);

    timeField2.value=`${finalTime.toLocaleString()}`;

}

filterButton.addEventListener('click',()=>{
     mainSearch.setAttribute('style','display:block;')
     mainSearch.setAttribute('placeholder','Enter here then open list.')
})

function filterOptions(input, select) {
    const filter = input.value.trim().toUpperCase();
    const options = select.getElementsByTagName('option');
    for (let i = 0; i < options.length; i++) {
        const txtValue = options[i].textContent;
        if (txtValue.toUpperCase().includes(filter)) {
            options[i].style.display = "";
        } else {
            options[i].style.display = "none";
        }
    }
}

document.querySelector('.refresh').addEventListener('click',()=>{
     location.reload();
})

document.getElementById('fromSearch').addEventListener('keyup', function () {
    filterOptions(this, fromTimeZone);
});

document.getElementById('toSearch').addEventListener('keyup', function () {
    filterOptions(this, toTimeZone);
});

function getGMTOffset(timeZone) {
    const zone = dataArray.find(zone => zone.zoneName === timeZone);
    return zone ? zone.gmtOffset : 0;
}

function convertToGmt(time){
    time=time/60;
    const sign= (time<0)? `-`:`+`;
    time= (time<0)? time*-1:time;
    let hours= formatTwoDigits(Math.floor( time/60));
    let mins= formatTwoDigits(Math.floor(time%60));
    const gmt= `(${sign} ${hours}:${mins})`
    return gmt;
}

function formatTwoDigits(num) {
    return String(num).padStart(2, '0');
}


