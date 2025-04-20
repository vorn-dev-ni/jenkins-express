pipeline {
    agent any
    stages {
      stage('Hello') {
        steps {
         
        sh 'docker version'
        sh 'docker info'
        sh ''' 
          touch container_hello.txt
        '''
            }
        }
     stage('pull node') {
            agent {
                docker {
                    image 'node:18'
                    reuseNode true
                }
            }
            steps {
                sh ''' 
                echo "Docker has been pulled"
                '''
                sh 'touch container.txt'
                sh 'npm --version'
            }
        }
        
    }
}
