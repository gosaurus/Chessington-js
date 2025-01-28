import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        // Horizontal
        let availableMoves = [];
        for(let position = 0 ; position <=7 ; position++) {
            if(position !== location.col)
                availableMoves.push(Square.at(location.row, position));
        }
        // Vertical
        for(let position = 0 ; position <=7 ; position++) {
            if(position !== location.row)
                availableMoves.push(Square.at(position, location.col));
        }

        return availableMoves;
    }
}
