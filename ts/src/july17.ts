export function doubleChar(str: string): string{
    const double = str.split('').map(el => el.repeat(2)).join('') 
    return double
  }
doubleChar("abcd");

enum lights {
    green = 'green',
    yellow = 'yellow',
    red = 'red'
 }
export function updateLight(current: lights): string {
 switch (current) {
    case lights.green:
        return lights.yellow      
    case lights.yellow:
        return lights.red        
    case lights.red:
        return lights.green
    default:
        const _exhaustiveCheck: never = current;
        return _exhaustiveCheck;
 }
}
