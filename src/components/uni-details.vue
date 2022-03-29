<!-- eslint-disable prettier/prettier -->

<template>
    <div  id="uni-details">
        <div class="details-btn-container">
            <button type="button" class="btn btn-primary">View</button>
            <button type="button" class="btn btn-primary" ><a href="#/university/update">Edit</a></button>
        </div>
        <div class="details-container">
            <h2>{{school.name}}</h2>
            <div class="details-section">
                <h5><strong>ABOUT SCHOOL</strong></h5>
                <span><strong>About:</strong><br> {{school.about.aboutSchool}}</span>
                <hr class="hr-style">
                <span><strong>Vission:</strong> <br>{{school.about.vission}}</span>
                <hr class="hr-style">
                <span><strong>Mission:</strong><br> {{school.about.mission}}</span>
                <hr class="hr-style">
                <span><strong>Goal:</strong><br> {{school.about.goal}}</span>
                <hr class="hr-style">



            </div>
            <br>
            <div class="details-section">
                <h5><strong>PROGRAMS OFFERED</strong></h5>
                <div v-for="field in school.programsOffered" v-bind:key="field.field">
                    <span><strong>Field:</strong> {{field.field}}</span>
                    <hr class="hr-style">
                    <dl class="row">
                        <dt class="col-sm-1">Programs:</dt>
                        <dd class="col-sm-11"><p v-for="programs in field.programs" v-bind:key="programs" class="no-space">{{programs}}</p></dd>
                    </dl>
                    <hr class="hr-style">
                    <span><strong>Tuition:</strong> {{field.tuition}}</span>
                    <hr class="hr-style">
                    <br>
                    <br>
                </div>
            </div>
            <br>
            <div class="details-section">
                <h5><strong>SCHOOL PERFORMANCE</strong></h5>
                <span><strong>Ranking:</strong> {{school.ranking}}</span>
                <hr class="hr-style">
                <span><strong>Board Ranking Performance:</strong> {{school.boardExamPerformance}}</span>
                <hr class="hr-style">
                <dl class="row">
                    <dt class="col-sm-1">Programs:</dt>
                    <dd class="col-sm-11"><p v-for="others in school.otherPerformance" v-bind:key="others" class="no-space">{{others}}</p></dd>
                </dl>
                <hr class="hr-style">
            </div>
            <br>
            <div class="details-section">
                <h5><strong>ADMISSION REQUIREMENTS</strong></h5>
                <span><strong>Deadline:</strong> {{school.requirements.deadline}}</span>
                <hr class="hr-style">
                <dl class="row">
                    <dt class="col-sm-1">Requirements:</dt>
                    <dd class="col-sm-11">
                        <div>
                            <span>Freshmen</span><br>
                            <div v-for="requirement in school.requirements.list.Freshmen" v-bind:key="requirement">
                                <span >{{requirement}}</span>
                            </div>
                        </div>
                        <br>
                        <div>
                            <span>Cross Enrolless</span><br>
                            <div v-for="requirement in school.requirements.list.CrossEnrolless" v-bind:key="requirement">
                                <span >{{requirement}}</span>
                            </div>
                        </div>
                        <br>
                        <div>
                            <span>Cross Enrolless</span><br>
                            <div v-for="requirement in school.requirements.list.CrossEnrolless" v-bind:key="requirement">
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
                    <dd class="col-sm-11"><p v-for="scholarship in school.scholarship" v-bind:key="scholarship" class="no-space">{{scholarship}}</p></dd>
                </dl>
                <hr class="hr-style">
            </div>


        </div> 
    </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
// @ is an alias to /src

export default {
  name: "uni-details",
  components: {},
  data() {
      return {
          school:{
            about:{
                aboutSchool:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                vission:'In 2030, the Manuel S. Enverga University Foundation is a globally competitive university with high concentrations of talent, excellent teaching environment, rigorous program quality, sufficient resources, and a culture of collaboration.',
                mission:'The University is a private non-stock non-profit non-sectarian educational foundation with a three-fold function - instruction, research, and community service - offering responsive and alternative programs supportive of national development and standards of global excellence.',
                goal:'MSEUF shall produce graduates who have research-based knowledge, leadership and management skills, and professionalism.',
            },
            name:'Manuel S. Enverga University Foundation Lucena City',
            programsOffered:[{
                field:'IT, Computer Science & Programming',
                programs:['BS in Computer Science','BS in Information Technology','BS in Entertainment and Multimedia Computing'],
                tuition:'20000 - 40000',
            },
            {
                field:'Hotel And Restaurant Management',
                programs:['BS in Computer Science','BS in Information Technology','BS in Entertainment and Multimedia Computing'],
                tuition:'20000 - 40000',
            }],

            ranking:'10th',
            boardExamPerformance: '90% Passing Rate',
            otherPerformance:['Center of Excellence (Criminology)','Center of Development (Information Technology)'],
            requirements:{
                deadline:'July 1 - Auguest 14, 2021',
                list:{
                    Freshmen:['Photocopy of Form 138 (High School Card)','National Career Assessment Examination (NCAE) Result','National Career Assessment Examination (NCAE) Result', 'Photocopy of Birth Certificate',  'Certificate of Good Moral Character (Photocopy)' ],
                    CrossEnrolless:['Photocopy of permit to cross enroll from the Registrar of the school they are regularly enrolled','Photocopy of Certificate of Good Moral Character'],
                    secondCourseEnrolles:['Photocopy of Transcript of Records/Evaluation','Photocopy of Birth Certificate','Photocopy of Certificate of Good Moral Character']
                },
                
            },
            scholarship:['Academis Scholarship','Study Grants', 'Study Grants with Sponsoring Institution','Service Grants', 'Mandated Academic Scholarship Grants'  ]
          }

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
