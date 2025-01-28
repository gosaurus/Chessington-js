import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const availableMoves = [];

        if (this.player === Player.WHITE) {
  
            if(location.row === 1) {

                if(!board.isSquareOccupied(Square.at(location.row + 1, location.col))) 
                    availableMoves.push(Square.at(location.row + 1, location.col));

                if(!board.isSquareOccupied(Square.at(location.row + 1, location.col)) && !board.isSquareOccupied(Square.at(location.row + 2, location.col)))  
                    availableMoves.push(Square.at(location.row + 2, location.col)); 
                
            } else {

                if(!board.isSquareOccupied(Square.at(location.row + 1, location.col))) 
                    availableMoves.push(Square.at(location.row + 1, location.col));
            }
            
        }  else if (this.player === Player.BLACK) {
            if(location.row === 6) {

                if(!board.isSquareOccupied(Square.at(location.row - 1, location.col)))
                    availableMoves.push(Square.at(location.row - 1, location.col));                

                if(!board.isSquareOccupied(Square.at(location.row - 1, location.col)) && !board.isSquareOccupied(Square.at(location.row - 2, location.col)))
                    availableMoves.push(Square.at(location.row - 2, location.col));
            } else {
                if(!board.isSquareOccupied(Square.at(location.row - 1, location.col)))
                    availableMoves.push(Square.at(location.row - 1, location.col));
            }
            
        }
        return availableMoves;
    }

}
