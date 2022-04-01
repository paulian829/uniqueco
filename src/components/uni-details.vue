<!-- eslint-disable prettier/prettier -->

<template>
    <div  id="uni-details">
        <div class="details-btn-container">
            <button type="button" class="btn btn-primary">View</button>
            <button type="button" class="btn btn-primary" ><a href="#/university/update">Edit</a></button>
        </div>
        <div class="details-container">
            <h2>{{data.Name}}</h2>
            <div class="details-section">
                <h5><strong>ABOUT SCHOOL</strong></h5>
                <span><strong>About:</strong><br> {{data.SchoolDetails.AboutSchool}}</span>
                <hr class="hr-style">
                <span><strong>Vission:</strong> <br>{{data.SchoolDetails.Vission}}</span>
                <hr class="hr-style">
                <span><strong>Mission:</strong><br> {{data.SchoolDetails.Mission}}</span>
                <hr class="hr-style">
                <span><strong>Goal:</strong><br> {{data.SchoolDetails.Goal}}</span>
                <hr class="hr-style">



            </div>
            <br>
            <div class="details-section">
                <h5><strong>PROGRAMS OFFERED</strong></h5>
                <div v-for="program in data.ProgramsOffered" v-bind:key="program.Field">
                    <span><strong>Field:</strong> {{program.Field}}</span>
                    <hr class="hr-style">
                    <dl class="row">
                        <dt class="col-sm-1">Programs:</dt>
                        <dd class="col-sm-11"><p v-for="programs in program.Programs" v-bind:key="programs" class="no-space">{{programs}}</p></dd>
                    </dl>
                    <hr class="hr-style">
                    <span><strong>Tuition: </strong>PHP {{program.MinTuition}} - PHP {{program.MaxTuition}}</span>
                    <hr class="hr-style">
                    <br>
                    <br>
                </div>
            </div>
            <br>
            <div class="details-section">
                <h5><strong>SCHOOL PERFORMANCE</strong></h5>
                <span><strong>Ranking:</strong> {{data.SchoolPerformance.Ranking}}</span>
                <hr class="hr-style">
                <span><strong>Board Ranking Performance:</strong> {{data.SchoolPerformance.BoardRankingPerformance}}</span>
                <hr class="hr-style">
                <dl class="row">
                    <dt class="col-sm-1">Others:</dt>
                    <dd class="col-sm-11"><p v-for="othersAward in data.SchoolPerformance.Others" v-bind:key="othersAward" class="no-space">{{othersAward}}</p></dd>
                </dl>
                <hr class="hr-style">
            </div>
            <br>
            <div class="details-section">
                <h5><strong>ADMISSION REQUIREMENTS</strong></h5>
                <span><strong>Deadline: </strong> {{data.AdmissionRequirements.Deadline}}</span>
                <hr class="hr-style">
                <dl class="row">
                    <dt class="col-sm-1">Requirements:</dt>
                    <dd class="col-sm-11">
                        <div>
                            <span>Freshmen</span><br>
                            <div v-for="requirement in data.AdmissionRequirements.Requirements.Freshmen" v-bind:key="requirement">
                                <span >{{requirement}}</span>
                            </div>
                        </div>
                        <br>
                        <div>
                            <span>Cross Enrolless</span><br>
                            <div v-for="requirement in data.AdmissionRequirements.Requirements['Cross Enrolless']" v-bind:key="requirement">
                                <span >{{requirement}}</span>
                            </div>
                        </div>
                        <br>
                        <div>
                            <span>Cross Enrolless</span><br>
                            <div v-for="requirement in data.AdmissionRequirements.Requirements['Second Course Enrollees']" v-bind:key="requirement">
                                <span >{{requirement}}</span>
                            </div>
                        </div>
                    </dd>
                </dl>
                <hr class="hr-style">
            </div>
            <br>
            <div class="details-section">
                <h5><strong>SCHOLARSHIP</strong></h5>
                <dl class="row">
                    <dt class="col-sm-1"></dt>
                    <dd class="col-sm-11"><p v-for="scholarship in data.Scholarship" v-bind:key="scholarship" class="no-space">{{scholarship}}</p></dd>
                </dl>
                <hr class="hr-style">
            </div>


        </div> 
    </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
// @ is an alias to /src
import data from '../../data.json'


export default {
  name: "uni-details",
  components: {},
  data() {
      return {
          data:data,
      }
  }
};
</script>

<style scoped>
#uni-details {
  padding: 50px;
  background: #F5F5F5;
}

#uni-details  .details-btn-container {
    display: flex;
    justify-content: flex-end;
}

#uni-details  .details-btn-container button{
    margin-left: 10px;
}

.details-container{
    margin-top: 30px;
    text-align: left;
}
.no-space{
    margin: 0;
}
.hr-style{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

}

.details-section{
    margin-top: 30px;
}

dd.col-sm-11 {
    padding-left: 60px;
}
.details-section h5 {
    color: #FF9829;
}

.details-btn-container a{
    color: white;
    text-decoration: none;
}
</style>
