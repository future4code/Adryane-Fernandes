import vote from '../requests/vote'
import voteComment from '../requests/voteComment'

export function voteUp(idPost, idComment){
  if(!idComment){
    vote(idPost, { direction: 1 })
  } else {
    voteComment(idPost, idComment, { direction: 1 })
  }
}

export function voteLow(idPost, idComment){  
  if(!idComment){
    vote(idPost, { direction: -1 })
  } else {
    voteComment(idPost, idComment, { direction: -1 })
  }
}
