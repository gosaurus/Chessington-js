import Player from '../player';
import Square from '../square';
import King from './king';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    
    addToMovesIfAvailable(board,square) {
        if(!board.isSquareOccupied(square)) 
            this.availableMoves.push(square);
    }

    addToMovesIfOccupied(board,square) {
        if(board.isSquareOccupied(square) && (board.getPieceColor(square) !== this.player) && !(board.getPiece(square) instanceof King)) 
             this.availableMoves.push(square);
    }


    getAvailableMoves(board) {
        let location = board.findPiece(this);        

        if (this.player === Player.WHITE) {
            if (location.row === 7) {
                return this.availableMoves; //empty because its at bottom of board
            }

            if(location.row === 1) {
                //Moves forward one
                this.addToMovesIfAvailable(board,Square.at(location.row + 1, location.col));
                
                //If square directly in front and two squares in front are not occupied, it can advance up to 2 squares
                if(!board.isSquareOccupied(Square.at(location.row + 1, location.col)) && !board.isSquareOccupied(Square.at(location.row + 2, location.col)))  
                    this.availableMoves.push(Square.at(location.row + 2, location.col));
                
            } else //if not on row 1
                //pawn can only advance 1 square at a time
                this.addToMovesIfAvailable(board,Square.at(location.row + 1, location.col));       

            // if there is a piece diagonally infront, pawn can move to take it
            if(location.col !== 7)
                this.addToMovesIfOccupied(board,Square.at(location.row + 1, location.col + 1));
            if(location.col !== 0)
                this.addToMovesIfOccupied(board,Square.at(location.row + 1, location.col - 1));    
        }          
        else if(this.player === Player.BLACK) {
            if (location.row === 0) {
                return this.availableMoves;
            }

            if(location.row === 6) {

                this.addToMovesIfAvailable(board,Square.at(location.row - 1, location.col));

                if(!board.isSquareOccupied(Square.at(location.row - 1, location.col)) && !board.isSquareOccupied(Square.at(location.row - 2, location.col)))
                    this.availableMoves.push(Square.at(location.row - 2, location.col));
            } else 
                this.addToMovesIfAvailable(board,Square.at(location.row - 1, location.col)); 
            

            if(location.col !== 7)
                this.addToMovesIfOccupied(board,Square.at(location.row - 1, location.col + 1)); 
            if(location.col !== 0)
                this.addToMovesIfOccupied(board,Square.at(location.row - 1, location.col - 1)); 
        }

        return this.availableMoves;
    }

}
