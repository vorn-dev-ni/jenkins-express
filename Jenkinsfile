pipeline {
    agent any
    stages {
      stage('Docker Info') {
        steps {
         
        sh 'docker version'
        sh ''' 
          touch container_hello.txt
        '''
            }
        }
    stage('Build') {
        agent {
            docker {
                image 'node:18-alpine'
                reuseNode true
            }

        }
        steps {

            sh ''' 
                 ls -la
                 node --version
                 npm --version
                 npm ci
                 npm run build
                 npm run start

            '''

        }
    }
     
    
        
    }
}
