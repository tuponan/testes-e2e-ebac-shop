pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/tuponan/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Executar os testes') {
            steps {
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}