Feature: New Workspace
        
    # Background : Existing user
	
	# Given User is logged into dashboard

@new_workspace_001
Scenario: New team workspace
automation_veirfication : 
       (i) User is able to create new team workspace
       (ii) User lands on the created workspace dashboard

Given User is logged into dashboard
When Create new team workspace "create-team-ws" with the following particulars
     | workspace name | workspace URL | company size |
     | Work-space     |  workspace    | 11-50        |
Then New team workspace is created successfully
And toast message appears


@new_workspace_002
Scenario: New personal workspace
automation_veirfication : 
       (i) User is able to create new personal workspace
       (ii) User lands on the created personal workspace dashboard
Given User is logged into dashboard
When create new personal workspace
Then New personal workspace is created successfully
And toast message appears