import Piece from './piece';
import Square from '../square';
import King from './king';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);        
    }

     addToMovesIfAvailable(board,square) {
        if(!board.isSquareOccupied(square)) {
            this.availableMoves.push(square);
            return true
        } else if (board.getPieceColor(square) !== this.player && !(board.getPiece(square) instanceof King)) {
            this.availableMoves.push(square);
            return false;
        }
    }
    
    getAvailableMoves(board) {

        let location = board.findPiece(this);
        this.availableMoves = [];

        // diagonally to the left top corner
        for(let r = location.row + 1, c = location.col - 1 ; r <=7 && c >=0 ; r++, c--) {
            if (!this.addToMovesIfAvailable(board, Square.at(r, c)))                    
                    break;
        }

        // diagonally to the left bottom corner
        for(let r = location.row - 1, c = location.col - 1 ; r >=0 && c >=0 ; r--, c--) {
            if (!this.addToMovesIfAvailable(board, Square.at(r, c)))                    
                    break;
        }

        // diagonally to the right top corner
        for(let r = location.row + 1, c = location.col + 1 ; r <=7 && c <=7 ; r++, c++) {
            if (!this.addToMovesIfAvailable(board, Square.at(r, c)))                    
                    break;
        }

        // diagonally to the right bottom corner
        for(let r = location.row - 1, c = location.col + 1 ; r >=0 && c <=7 ; r--, c++) {
            if (!this.addToMovesIfAvailable(board, Square.at(r, c)))                    
                    break;
        }

        return this.availableMoves;
    }
}
