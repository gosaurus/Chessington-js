import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    addToMovesIfAvailable(board,square) {
            if(!board.isSquareOccupied(square)) 
                this.availableMoves.push(square);
        }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        this.availableMoves = [];
       
        
        this.addToMovesIfAvailable(board, Square.at(location.row + 1, location.col)); // Up 1
        this.addToMovesIfAvailable(board, Square.at(location.row + 1, location.col + 1 )); // Up right 1
        this.addToMovesIfAvailable(board, Square.at(location.row + 1, location.col)); // Up 1
        this.addToMovesIfAvailable(board, Square.at(location.row - 1, location.col)); // down 1
        this.addToMovesIfAvailable(board, Square.at(location.row, location. col + 1)); // right 1
        this.addToMovesIfAvailable(board, Square.at(location.row, location. col - 1)); // left 1

        this.addToMovesIfAvailable(board, Square.at(location.row + 1, location.col + 1 )); // Up right 1
        this.addToMovesIfAvailable(board, Square.at(location.row - 1, location.col + 1)); // Down right one
        this.addToMovesIfAvailable(board, Square.at(location.row - 1, location.col - 1)); // Down left one
        this.addToMovesIfAvailable(board, Square.at(location.row + 1, location.col - 1)); // up left one


        return this.availableMoves;
    }
}
