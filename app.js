const inizializeGrid = (array) => {
array[1][1].style.border = "4px solid black";
array[0][1].style.borderRight = "4px solid black";
array[0][1].style.borderLeft = "4px solid black";
array[2][1].style.borderRight = "4px solid black";
array[2][1].style.borderLeft = "4px solid black";
array[1][0].style.borderTop = "4px solid black";
array[1][0].style.borderBottom = "4px solid black";
array[1][2].style.borderTop = "4px solid black";
array[1][2].style.borderBottom = "4px solid black";
};

const restartSez = (trisSez) => {
    trisSez.forEach( section => {
        section.innerHTML = "";
    });
};

const setPoints = (pointsCount, points) => {
    pointsCount.innerHTML = "P1(X): " + points[0] + " / P2(O): " + points[1];
};

const check = (trisSez, array, points, pointsCount) => {
    trisSez.forEach( section => {
        section.addEventListener('click', () => {
            if(section.textContent=="X" || section.textContent=="O"){
            }else{
                if(xo == 0){section.innerHTML = "X";
                xo+=1;
            }else{
                section.innerHTML = "O"; 
                xo-=1;
            }};
            for(row=0; row<=2; row++){
                for(collumn=0; collumn<1; collumn++){
    
                    if((array[row][collumn].textContent=="X" || array[row][collumn].textContent=="O")&& ((array[row][collumn].textContent==array[row][collumn+1].textContent)&&(array[row][collumn+1].textContent==array[row][collumn+2].textContent))){
                        
                        if(array[row][collumn].textContent=="X"){
                            points[0]+=1;
                        }else if(array[row][collumn].textContent=="O"){
                            points[1]+=1;
                        };
                        console.log(points);
                        setPoints(pointsCount, points);
                        restartSez(trisSez);
                        break;
                    }else{};
                }
            };

            for(collumn=0; collumn<=2; collumn++){
                for(row=0; row<1; row++){
    
                    if((array[row][collumn].textContent=="X" || array[row][collumn].textContent=="O")&& ((array[row][collumn].textContent==array[row+1][collumn].textContent)&&(array[row+1][collumn].textContent==array[row+2][collumn].textContent))){
                        
                        if(array[row][collumn].textContent=="X"){
                            points[0]+=1;
                        }else if(array[row][collumn].textContent=="O"){
                            points[1]+=1;
                        };
                        console.log(points);
                        setPoints(pointsCount, points);
                        restartSez(trisSez);
                        break;
                    }else{};
                }
            };

                if((array[1][1].textContent=="X" || array[1][1].textContent=="O") && (((array[0][0].textContent==array[1][1].textContent)&&(array[1][1].textContent==array[2][2].textContent)) || ((array[0][2].textContent==array[1][1].textContent)&&(array[1][1].textContent==array[2][0].textContent)))){
                    if(array[1][1].textContent=="X"){
                        points[0]+=1;
                    }else if(array[1][1].textContent=="O"){
                        points[1]+=1;
                    };
                    console.log(points);
                    setPoints(pointsCount, points);
                    restartSez(trisSez);
                }else{};
        });
    });
}; 

const bool = () => {}
console.log(bool());

const trisSez = document.querySelectorAll('.intersection');
const pointsCount = document.querySelector('.pointsCount');

const array = [[],[],[]];
const points = [0 , 0];
let collumn = 0;
let row = 0;
let xo = 0;

trisSez.forEach( section => {
    array[row][collumn] = section;
    if(collumn==2){
        row+=1;
        collumn = 0;
    }else{collumn+=1};
});

inizializeGrid(array);

setPoints(pointsCount, points);

check(trisSez, array, points, pointsCount);