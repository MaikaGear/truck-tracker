export const currentDate = new Date().toDateString()
export function getDate(){
    return currentDate
}
export const currentTime = new Date().toLocaleTimeString()
export function getTime(){
    return currentTime
}



export let trucksData = [
    {
        company: 'USF',
        trailer: 48475,
        openedorclosed: 'Closed trailer',
        emptyorloaded: 'Unknown',
        dateRecorded: getDate(),
        timeRecorded: getTime()
    }
]
// trucksData.forEach((truck)=>{
//     localStorage.setItem('trucks', JSON.stringify(truck))
// })
