import { Injectable } from '@nestjs/common';
import { Issue } from 'src/issue/entity/issue.entity';
import { Repository } from 'typeorm';
import { CreateIssueDto } from 'src/issue/entity/issue.dto';
import { IssueService } from 'dist/issue/entity/issue.service';

@Injectable()
export class IssuehelperService {
    constructor(
        private IssueService: IssueService,
    ) { }
    async getIssueByName(name : string): Promise<Issue>{
        const Issue=await this.IssueService.getIssueByName(name);
    }
    async getIssues(Issues: string): Promise<Issue> {
        const Issue = await this.IssueService.getIssues(Issues); 
        return Issue;
    }
    async getIssueStatuses(IssueStatuses: string): Promise<Issue> {
        const Issue = await this.IssueService.getIssueStatuses(IssueStatuses); 
        return Issue;
    }
    async getIssueByComments(IssueByComments: string): Promise<Issue> {
        const Issue = await this.IssueService.getIssueByComments(IssueByComments); 
        return Issue;
    }
    async createIssueByName(createIssueDto: CreateIssueDto): Promise<Issue> {
        const newIssue = new this.IssueService(createIssueDto);
        return newIssue.save();
    }
    async updateIssue(Issue: string, createIssueDto: CreateIssueDto): Promise<Issue> {
        const updatedIssue = await this.IssueService
                            .findIssueAndUpdate(Issue, createIssueDto, {new: true});
        return updatedIssue;
    }
}
/*const express = require('express')
const mongoOp = require("./mongo")
const app = express()
const router = express.Router()

router.get('/users',(req,res) => {
  var pageNo = parseInt(req.query.pageNo)
  var size = parseInt(req.query.size)
  var query = {}
  if(pageNo < 0 || pageNo === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }
  query.skip = size * (pageNo - 1)
  query.limit = size
  // Find some documents
       mongoOp.count({},function(err,totalCount) {
             if(err) {
               response = {"error" : true,"message" : "Error fetching data"}
             }
         mongoOp.find({},{},query,function(err,data) {
              // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                var totalPages = Math.ceil(totalCount / size)
                response = {"error" : false,"message" : data,"pages": totalPages};
            }
            res.json(response);
         });
       })
})

app.use('/api',router)
app.listen(3000)
*/
