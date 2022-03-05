pipeline {
    agent none
    environment {
        project_name="@dong/master"
    }
    stages {
        stage('Prepare'){
            parallel {
                stage("Check master") {
                    steps {
                        node("master"){
                            sh "uname -a"
                        }
                    }
                }
            }
        }
		stage("Build"){
			when {
				branch 'master'
			}
			steps {
				node("master"){
                    checkout scm
					sh "npm install"
					sh "npm run build"
				}
			}
		}
    }
    post {
        always {
            node('master'){
                sh "echo \"Pipeline has done\""
            }
        }
    }
}