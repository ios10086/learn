# PipeLine

```bash
def url
def updateDescription

pipeline {
    agent any
    parameters {
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'master', name: 'SHELL_BRANCH', type:'PT_BRANCH_TAG', description: '移动框架分支选择',
                    useRepository:'git@192.168.95.31:isupplant_ios/isupplant.git'
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'master', name: 'YH_BRANCH', type:'PT_BRANCH_TAG', sortMode:'DESCENDING_SMART', description: '隐患分支选择，invalid代表不包含',
                    useRepository:'git@192.168.95.31:huchenming/sphazard.git'
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'master', name: 'SES_OTHER_BRANCH', type:'PT_BRANCH_TAG', sortMode:'DESCENDING_SMART', description: '安全分支选择，模块包括安全检查、安全制单，invalid代表不包含',
                    useRepository:'git@192.168.95.31:huchenming/spsecuritycheck.git'  
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'master', name: 'EAM_BRANCH', type:'PT_BRANCH_TAG', sortMode:'DESCENDING_SMART', description: '设备分支选择，模块包括维修工单、设备档案、备件管理、预警，invalid代表不包含',
                    useRepository:'git@192.168.95.31:zhaomenglei/eambranch.git' 
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'master', name: 'WTS_BRANCH', type:'PT_BRANCH_TAG', sortMode:'DESCENDING_SMART', description: '作业票分支选择，invalid代表不包含',
                    useRepository:'git@192.168.95.31:zhaomenglei/wtsbranch.git'    
        string defaultValue: 'isupPlant', description: 'APP名称', name: 'DISPLAY_NAME'
        string defaultValue: '6.0.0.0', description: '编译版本', name: 'BUILD_VERSION'
        string defaultValue: '"supPlant-isupPlant V6.0.0.0-210107-C(iOS)"', description: '打包包名,名称必须包含双引号', name: 'RELEASE_FILE_NAME'
                choice(choices: ['enterprise', 'development', 'app-store', 'ad-hoc'], description: '分发渠道' , name: 'METHOD')
        string defaultValue: 'com.supcon.mobile.iSupPlant', description: '唯一标识符', name: 'APPLICATION_ID'
        string (name: 'UPDATE_DESCRIPTION', defaultValue: '', description: '更新说明')
        string (name: 'RELEASE_BASE_URL', defaultValue: 'http://192.168.90.192:30215', description: '发布平台地址')
        string defaultValue: 'huchenming@supcon.com', description: '邮件提醒地址，多人分号以隔开', name: 'EMAIL_ADDRESSES'
    }
    stages {
        stage('移动框架'){
            steps{
                checkout([$class: 'GitSCM', 
                    branches: [[name: "${params.SHELL_BRANCH}"]], 
                    doGenerateSubmoduleConfigurations: false, 
                    extensions: [], 
                    gitTool: 'Default', 
                    submoduleCfg: [], 
                    userRemoteConfigs: [[url: 'git@192.168.95.31:isupplant_ios/isupplant.git', credentialsId: 'b0abf313-e643-41f8-9b69-5c84e883520c']]
                ])
                sh 'git reset --hard'
            }
        }
        stage('隐患'){
            when { 
                expression { 
                    dir('/Users/mac/.jenkins/workspace/iOS/ISupPlant/hlEAM/SPlantSection/BusinessSection/SPHazard') {
                        checkout([$class: 'GitSCM', 
                            branches: [[name: "${params.YH_BRANCH}"]], 
                            doGenerateSubmoduleConfigurations: false, 
                            extensions: [], 
                            gitTool: 'Default', 
                            submoduleCfg: [], 
                            userRemoteConfigs: [[url: 'git@192.168.95.31:huchenming/sphazard.git', credentialsId: 'b0abf313-e643-41f8-9b69-5c84e883520c']]
                        ])
                    }
                    return params.YH_BRANCH == "invalid" 
                } 
            }
            steps{
                sh 'ruby $WORKSPACE/DeleteFileScript.rb "$WORKSPACE/ISupPlant/hlEAM/SPlantSection/BusinessSection/SPHazard"'
            }
        }
        stage('安全（除隐患）'){
            when { 
                expression { 
                    dir('/Users/mac/.jenkins/workspace/iOS/ISupPlant/hlEAM/SPlantSection/BusinessSection/SPSESOther') {
                        checkout([$class: 'GitSCM', 
                            branches: [[name: "${params.SES_OTHER_BRANCH}"]], 
                            doGenerateSubmoduleConfigurations: false, 
                            extensions: [], 
                            gitTool: 'Default', 
                            submoduleCfg: [], 
                            userRemoteConfigs: [[url: 'git@192.168.95.31:huchenming/spsecuritycheck.git', credentialsId: 'b0abf313-e643-41f8-9b69-5c84e883520c']]
                        ])
                    }
                    return params.SES_OTHER_BRANCH == "invalid" 
                } 
            }
            steps{
                sh 'ruby $WORKSPACE/DeleteFileScript.rb "$WORKSPACE/ISupPlant/hlEAM/SPlantSection/BusinessSection/SPSESOther"'
            }
        }
        stage('设备'){
            when { 
                expression {
                    dir('/Users/mac/.jenkins/workspace/iOS/ISupPlant/hlEAM/MobileProject/Modules/eamBranch') {
                        checkout([$class: 'GitSCM', 
                            branches: [[name: "${params.EAM_BRANCH}"]], 
                            doGenerateSubmoduleConfigurations: false, 
                            extensions: [], 
                            gitTool: 'Default', 
                            submoduleCfg: [], 
                            userRemoteConfigs: [[url: 'git@192.168.95.31:zhaomenglei/eambranch.git', credentialsId: 'b0abf313-e643-41f8-9b69-5c84e883520c']]
                        ])
                    }
                    return params.EAM_BRANCH == "invalid" 
                } 
            }
            steps{
                sh 'ruby $WORKSPACE/DeleteFileScript.rb "$WORKSPACE/ISupPlant/hlEAM/MobileProject/Modules/eamBranch"'
            }
        }
        stage('作业'){
            when { 
                expression {
                    dir('/Users/mac/.jenkins/workspace/iOS/ISupPlant/hlEAM/MobileProject/Modules/wtsBranch') {
                        checkout([$class: 'GitSCM', 
                            branches: [[name: "${params.WTS_BRANCH}"]], 
                            doGenerateSubmoduleConfigurations: false, 
                            extensions: [], 
                            gitTool: 'Default', 
                            submoduleCfg: [], 
                            userRemoteConfigs: [[url: 'git@192.168.95.31:zhaomenglei/wtsbranch.git', credentialsId: 'b0abf313-e643-41f8-9b69-5c84e883520c']]
                        ])
                    }
                    return params.WTS_BRANCH == "invalid" 
                } 
            }
            steps{
                sh 'ruby $WORKSPACE/DeleteFileScript.rb "$WORKSPACE/ISupPlant/hlEAM/MobileProject/Modules/wtsBranch"'
            }
        }
        stage('Pod Install') {
            steps {
                sh "cd $WORKSPACE/ISupPlant && pod install --no-repo-update"
            }
        }
        stage('Build') {
            stages {
                stage('Archive') {
                    steps {
                        sh "$WORKSPACE/AutoPackageScript.sh -a ${params.METHOD} -b ${params.APPLICATION_ID} -c ${params.DISPLAY_NAME} -d ${params.BUILD_VERSION} -e ${params.RELEASE_FILE_NAME} -f ${params.RELEASE_BASE_URL} -g ${env.BUILD_NUMBER} -h ${params.SHELL_BRANCH} -i ${params.YH_BRANCH} -j ${params.SES_OTHER_BRANCH} -k ${params.EAM_BRANCH} -m ${params.WTS_BRANCH}"
                    } 
                }
                
                stage('Read') {
                    steps {
                        script {
                            def props = readJSON file: 'url.json'
                            url=props['url']
                            updateDescription=props['updateDescription']
                        }                    
                    } 
                }
            }
            
            post{
    			success {
     				emailext (
     					subject: "发布成功",
     					body: """发布成功 \n
     							下载地址：${url} \n
     							更新说明：${updateDescription}
     						""",
     					to: "${EMAIL_ADDRESSES}",
     					from: "huchenming@supcon.com"
     				)
                }
          	}
        }
        stage('Compile') {
            steps {
                archiveArtifacts artifacts: 'Package/**/*.ipa', followSymlinks: false 
            }
        }
    }
    post {
        success {
            echo 'Build failed'
        }
        failure {
            script {
                sh "curl -X PUT -H 'Content-Type: application/json' -d '{\"buildNumber\":\"${env.BUILD_NUMBER}\",\"jobName\":\"${env.JOB_NAME}\"}' ${params.RELEASE_BASE_URL}/inter-api/mobile-platform/v1/appVersion/callback"
            }
        }
    }
}
```





```ruby
require 'xcodeproj'
require 'json'
require 'find'

project_path = '/Users/mac/.jenkins/workspace/iOS/ISupPlant/hlEAM.xcodeproj'    # 工程路径
project = Xcodeproj::Project.open(project_path)

group_path = ARGV[0]
#group_path = '/Users/mac/.jenkins/workspace/iOS/ISupPlant/hlEAM/SPlantSection/BusinessSection/SPHazard'  #group路径

def process_group_remove_path(aTarget, aGroup)
    puts "\nprocess_group_remove_path..."

    aGroup.files.each do |file|
        aTarget.resources_build_phase.remove_file_reference(file)
    end

    aGroup.groups.each do |group|
        process_group_remove_path(aTarget,group)
    end
end

def deletePackage(package_path, project)
    target = project.targets.first
    arr=[];
    #通过find找到该物理路径下所有的文件结构地址
    Find.find(package_path) do |path|
        if !path.end_with?(".m", ".mm", ".h", ".png", ".plist", ".json", ".xib", ".storyboard")
            #将物理路径转成 项目的group路径，删除path 前面不相干的路径，再拼接项目名称 ，44长度要视实际情况
            path=path[44,path.length-44]
            puts path
            #按照 group路径最长的加到arr数组最后面逻辑处理。
            if arr.size == 0
                arr.push(path)
                else
                for n in arr do
                    if path.length > n.length
                        arr.push(path)
                        break
                    end
                end
            end
        end
    end
    #对数组进行反转，最深的路径在最前面
    arr = arr.reverse
    #将arr里面所有的路径进行删除资源以及引用
    for n in arr do
        removeGroup = project.main_group.find_subpath(n, true)
        removeGroup.set_source_tree('<group>')

        if !removeGroup.empty? then
            process_group_remove_path(target, removeGroup)
            removeGroup.clear()
        end
    end
end

deletePackage(group_path, project)
project.save

```





