import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './king';


export default class Rook extends Piece {
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
        const availableMoves = listAvailableMoves();
        
        // Horizontally to the left
        for(let position = location.col ; position >= 0 ; position--) {
            if(position !== location.col)
                if (!this.addToMovesIfAvailable(board, Square.at(location.row, position)))                    
                    break;
        }

        // Horizontally to the right
        for(let position = location.col ; position <= 7 ; position++) {
            if(position !== location.col)
                if (!this.addToMovesIfAvailable(board, Square.at(location.row, position)))                    
                    break;
        }
        
        // Vertically to the top
        for(let position = location.row ; position <= 7 ; position++) {
            if(position !== location.row)
            if (!this.addToMovesIfAvailable(board, Square.at(position, location.col)))                    
                break;
        }

        // Vertically to the bottom
        for(let position = location.row ; position >= 0 ; position--) {
            if(position !== location.row)
                if (!this.addToMovesIfAvailable(board, Square.at(position, location.col)))                    
                    break;
        }
        return this.availableMoves;
    }
}
