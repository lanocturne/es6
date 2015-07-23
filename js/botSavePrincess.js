function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for(var i = 1; i <= dimension; ++i)
    {
        grid.push(lines[i]);
    }
    displayPathtoPrincess(dimension, grid);
}
function displayPathtoPrincess(dimension, grid)
{
    // Your Code here
    var princessPos,
        heroPos,
        cornors=[{x:0,y:0},{x:0,y:dimension-1},{x:dimension-1,y:0},{x:dimension-1,y:dimension-1}],
        cornorIndex=0;
    //find princess index
    while(typeof princessPos === 'undefined'){
        if(gird[cornors[cornorIndex].x][cornors[cornorIndex].y]==='p'){
            //found pricess postion
            princessPos=cornors[cornorIndex];
        }
    }
    //find hero
    //odd dimension has center
    var middle=Math.floor(dimension/2);
    if(!dimension % 2){
        heroPos = {x:middle,y:middle};
    } else {
       //do 8 direction search to find hero at even grid
        for(var i=middle-1;i<middle+2;i++){
            for(var j=middle-1;j<middle+2;j++){
                if(grid[i][j]==='m'){
                    heroPos={x:i,y:j};
                    break;
                }
            }
        } 
    }
    //path finder
    while(heroPos.x !== princessPos.x && heroPos.y !== princessPos.y){
        if(heroPos.x > princessPos.x){
            //go left
            console.log('LEFT');
            heroPos.x--;
        }
        if(heroPos.x < princessPos.x){
            console.log('RIGHT');
            heroPos.x++;
        }
        if(heroPos.y<princessPos.y){
            console.log('DOWN');
            heroPos.y++;
        }
        if(heroPos.y>princessPos.y){
            console.log('UP');
            heroPos.y--;
        }
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
