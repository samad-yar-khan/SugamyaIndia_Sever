const environment = require('../../../config/environment');
const octokitHelper = require('octokit');
const Octokit = octokitHelper.Octokit;
const octokit = new Octokit();

module.exports.main = async function(req,res){

    try{
        
        let returnedData = await octokit.request("GET /repos/{owner}/{repo}", {
            owner: "RocketChat",
            repo: "RC4Community",
        });
        const {data} = returnedData;
        const {id,name,owner,full_name , html_url , description , stargazers_count,forks_count,open_issues_count,topics } = data;
        const ownerName = owner.login;
        const compactData = {id,full_name , name,ownerName, html_url , description , stargazers_count,forks_count,open_issues_count,topics};
        return res.status(200).json({
            data : compactData
        })

    }catch(err){
        return res.json(500 , {
            error_message : err,
            success:false,
            message:"Internal Server Error!"
        })
    }
  
}

module.exports.issues = async function(req,res){

    try{
        let returnedData = await octokit.request("GET /repos/{owner}/{repo}/issues", {
            owner: "RocketChat",
            repo: "RC4Community",
          });
        let data = returnedData.data;
        let issueList = [];
        data.forEach((issue)=>{
           
            let newIssue = new Object();
            if(typeof issue.pull_request === 'undefined' ){
                newIssue['id'] = issue.id;
                let {login,avatar_url,html_url} = issue.user;
                newIssue['user'] = {login,avatar_url,html_url};
                newIssue['title'] = issue.title;
                newIssue['number'] = issue.number;
                newIssue['html_url'] = issue.html_url;
                issueList.push(newIssue);
            }
        });
        return res.status(200).json({
            data : issueList
        })
    }catch(err){
        return res.json(500 , {
            error_message : err,
            success:false,
            message:"Internal Server Error!"
        })
    }
  
}

module.exports.issues = async function(req,res){

    try{
        let returnedData = await octokit.request("GET /repos/{owner}/{repo}/issues", {
            owner: "RocketChat",
            repo: "RC4Community",
          });
        let data = returnedData.data;
        let issueList = [];
        data.forEach((issue)=>{
           
            let newIssue = new Object();
            if(typeof issue.pull_request === 'undefined' ){
                newIssue['id'] = issue.id;
                let {login,avatar_url,html_url} = issue.user;
                newIssue['user'] = {login,avatar_url,html_url};
                newIssue['title'] = issue.title;
                newIssue['number'] = issue.number;
                newIssue['html_url'] = issue.html_url;
                newIssue['state'] = issue.state;
                newIssue['reactions'] = issue.reactions;
                newIssue['comments'] = issue.comments;
                issueList.push(newIssue);
            }
        });
        return res.status(200).json({
            data : data
        })
    }catch(err){
        return res.json(500 , {
            error_message : err,
            success:false,
            message:"Internal Server Error!"
        })
    }
  
}


module.exports.pulls = async function(req,res){

    try{
        let returnedData = await octokit.request("GET /repos/{owner}/{repo}/pulls", {
            owner: "RocketChat",
            repo: "RC4Community",
          });
        let data = returnedData.data;
        let pullList = [];
        data.forEach((pull)=>{
            let newPull = new Object();
                newPull['id'] = pull.id;
                let {login,avatar_url,html_url} = pull.user;
                newPull['user'] = {login,avatar_url,html_url};
                newPull['title'] = pull.title;
                newPull['number'] = pull.number;
                newPull['state'] = pull.state;
                console.log(pull.state);
                newPull['html_url'] = pull.html_url;
                pullList.push(newPull);
        });
        return res.status(200).json({
            data : data
        })
    }catch(err){
        return res.json(500 , {
            error_message : err,
            success:false,
            message:"Internal Server Error!"
        })
    }
  
}


module.exports.contributors = async function(req,res){

    try{
        
        const contributorData = await octokit.request("GET /repos/{owner}/{repo}/contributors", {
            owner: "RocketChat",
            repo: "RC4Community",
          });

        const data = contributorData.data;
        let contributorList = [];
        data.forEach((contributor)=>{
            let newContributor = new Object();
            newContributor['login'] = contributor.login;
            newContributor['html_url'] = contributor.html_url;
            newContributor['avatar_url'] = contributor.avatar_url;
            newContributor['contributions'] = contributor.contributions;
            contributorList.push(newContributor);
        })

        return res.status(200).json({
            data : data
        })

    }catch(err){
        return res.json(500 , {
            error_message : err,
            success:false,
            message:"Internal Server Error!"
        })
    }

}