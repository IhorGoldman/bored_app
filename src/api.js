const baseUrl='https://www.boredapi.com/api/';
export async function getRandomActivity(){
    const response=await fetch(baseUrl+"activity");
    if (response.ok){
        const activity=await response.json();
        return activity;
    } else {
        throw "Server response error "+response.status;
    }
}