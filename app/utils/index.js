export function UserDisplayName(req){ //utils check if we have a user inside a reques,t we have display naem availabe and if we dont we return blank
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

//middleware another one
export function AuthGuard(req,res,next){  //intercept request, checks if user is logged in, it=f not logged in athen no access
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}