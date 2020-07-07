// /*
// Primesti doua array-uri, pe care trebuie sa le inversezi si sa afisezi un array cu rezultatul sumei indexurilor acestora;

// ex:
// let arr1 = [2,4,3]
// let arr2 = [5,6,4]

// output:
// [7,0,8]

// */

// // let exArr1 = [2,4,3]
// // let exArr2 = [5,6,4]

// function reverseArray(arr){
	
// 	const reversArr = arr.reverse();
// 	return reversArr;
// }


// let exArr1 = [2, 4, 3]
// let exArr2 = [5, 6, 4]


// function calculeazaArr(arr1, arr2) {

//     let sum = arr1.map((num, idx) => {

//         let rezultat = num + arr2[idx];
//         if (rezultat >= 10) {
//             let rest = rezultat % 10;
//             if(arr2[idx+1]){
//                 arr2[idx+1] += 1;
//             }
//             return rest
//         } else {

//             return rezultat
//         }

//     })
	
//     return reverseArray(sum);
// }

// console.log(calculeazaArr(exArr1, exArr2))

// // let exArr1 = [2, 4, 3]
// // let exArr2 = [5, 6, 4]


// // function calculeazaArr(arr1, arr2) {

// //     let sum = arr1.map((num, idx) => {

// //         let rezultat = num + arr2[idx];
// //         if (rezultat >= 10) {
// //             let rest = rezultat % 10;
// //             if(arr2[idx+1]){
// //                 arr2[idx+1] += 1;
// //             }else{
// //                 sum[0] += 1;
// //             }
// //             return rest
// //         } else {

// //             return rezultat
// //         }

// //     })

// //     console.log(sum);
// // }

// // console.log(calculeazaArr(exArr1, exArr2))


// // function calculeazaArr(arr1,arr2){
	
// // 	let sum = arr1.map((num,idx) => {
		
// // 		let rezultat =  num + arr2[idx] ;
// // 		if(rezultat >= 10){
// // 			let rest = rezultat % 10;
// // 			return rest
// // 		} else{
			
// // 		return rezultat}
		
// // 	})
	
// // 	console.log(sum);
// // }

// // calculeazaArr(exArr1,exArr2)

let exArr1 = [2,4,3]
let exArr2 = [5,6,6]


function calculeazaArr(arr1, arr2) {
    let sum = []
    do {
        for (let i = 0; i < arr1.length; i++) {
            sum[i] = arr1[i] + arr2[i];
            if (sum[i] >= 10) {
                const rest = sum[i] % 10;
                console.log(rest)
                sum[i] = rest;
                if (arr1[i + 1]) {
                    arr1[i + 1] += 1;
                } else {
                    sum[0] += 1;
                    arr1[0] += 1;
                }
            }
        }
        console.log(sum)
    }while (sum[0] >= 10);

    return sum;
}

console.log(calculeazaArr(exArr1, exArr2))