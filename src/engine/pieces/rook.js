import Piece from './piece';
import Square from '../square';
import Player from '../player';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }
    // 
    addToMovesIfAvailable(board,square) {
        if(!board.isSquareOccupied(square)) 
            this.availableMoves.push(square);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        // Horizontally to the left
        for(let position = location.col ; position >= 0 ; position--) {
            if(position !== location.col)
                if (board.isSquareOccupied(Square.at(location.row, position))) 
                    break;//check if occupied
                else
                    this.addToMovesIfAvailable(board, Square.at(location.row, position));
        }

        // Horizontally to the right
        for(let position = location.col ; position <= 7 ; position++) {
            if(position !== location.col)
                if (board.isSquareOccupied(Square.at(location.row, position))) 
                    break;//check if occupied
                else
                    this.addToMovesIfAvailable(board, Square.at(location.row, position));
        }
        
        // Vertically to the top
        for(let position = location.row ; position <= 7 ; position++) {
            if(position !== location.row)
                if (board.isSquareOccupied(Square.at(position, location.col))) 
                    break;//check if occupied
                else
                    this.addToMovesIfAvailable(board, Square.at(position, location.col));
        }

        // Vertically to the bottom
        for(let position = location.row ; position >= 0 ; position--) {
            if(position !== location.row)
                if (board.isSquareOccupied(Square.at(position, location.col))) 
                    break;//check if occupied
                else
                    this.addToMovesIfAvailable(board, Square.at(position, location.col));
        }
        return this.availableMoves;
    }
}
