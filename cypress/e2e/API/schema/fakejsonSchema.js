module.exports.fakeJsonSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
        "node_id": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "full_name": {
            "type": "string"
        },
        "private": {
            "type": "boolean"
        },
        "owner": {
            "type": "object",
            "properties": {
                "login": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "node_id": {
                    "type": "string"
                },
                "avatar_url": {
                    "type": "string"
                },
                "gravatar_id": {
                    "type": "string"
                },
                "url": {
                    "type": "string"
                },
                "html_url": {
                    "type": "string"
                },
                "followers_url": {
                    "type": "string"
                },
                "following_url": {
                    "type": "string"
                },
                "gists_url": {
                    "type": "string"
                },
                "starred_url": {
                    "type": "string"
                },
                "subscriptions_url": {
                    "type": "string"
                },
                "organizations_url": {
                    "type": "string"
                },
                "repos_url": {
                    "type": "string"
                },
                "events_url": {
                    "type": "string"
                },
                "received_events_url": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "site_admin": {
                    "type": "boolean"
                }
            },
            "required": [
                "login",
                "id",
                "node_id",
                "avatar_url",
                "gravatar_id",
                "url",
                "html_url",
                "followers_url",
                "following_url",
                "gists_url",
                "starred_url",
                "subscriptions_url",
                "organizations_url",
                "repos_url",
                "events_url",
                "received_events_url",
                "type",
                "site_admin"
            ]
        },
        "html_url": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "fork": {
            "type": "boolean"
        },
        "url": {
            "type": "string"
        },
        "forks_url": {
            "type": "string"
        },
        "keys_url": {
            "type": "string"
        },
        "collaborators_url": {
            "type": "string"
        },
        "teams_url": {
            "type": "string"
        },
        "hooks_url": {
            "type": "string"
        },
        "issue_events_url": {
            "type": "string"
        },
        "events_url": {
            "type": "string"
        },
        "assignees_url": {
            "type": "string"
        },
        "branches_url": {
            "type": "string"
        },
        "tags_url": {
            "type": "string"
        },
        "blobs_url": {
            "type": "string"
        },
        "git_tags_url": {
            "type": "string"
        },
        "git_refs_url": {
            "type": "string"
        },
        "trees_url": {
            "type": "string"
        },
        "statuses_url": {
            "type": "string"
        },
        "languages_url": {
            "type": "string"
        },
        "stargazers_url": {
            "type": "string"
        },
        "contributors_url": {
            "type": "string"
        },
        "subscribers_url": {
            "type": "string"
        },
        "subscription_url": {
            "type": "string"
        },
        "commits_url": {
            "type": "string"
        },
        "git_commits_url": {
            "type": "string"
        },
        "comments_url": {
            "type": "string"
        },
        "issue_comment_url": {
            "type": "string"
        },
        "contents_url": {
            "type": "string"
        },
        "compare_url": {
            "type": "string"
        },
        "merges_url": {
            "type": "string"
        },
        "archive_url": {
            "type": "string"
        },
        "downloads_url": {
            "type": "string"
        },
        "issues_url": {
            "type": "string"
        },
        "pulls_url": {
            "type": "string"
        },
        "milestones_url": {
            "type": "string"
        },
        "notifications_url": {
            "type": "string"
        },
        "labels_url": {
            "type": "string"
        },
        "releases_url": {
            "type": "string"
        },
        "deployments_url": {
            "type": "string"
        },
        "created_at": {
            "type": "string"
        },
        "updated_at": {
            "type": "string"
        },
        "pushed_at": {
            "type": "string"
        },
        "git_url": {
            "type": "string"
        },
        "ssh_url": {
            "type": "string"
        },
        "clone_url": {
            "type": "string"
        },
        "svn_url": {
            "type": "string"
        },
        "homepage": {
            "type": "string"
        },
        "size": {
            "type": "integer"
        },
        "stargazers_count": {
            "type": "integer"
        },
        "watchers_count": {
            "type": "integer"
        },
        "language": {
            "type": "string"
        },
        "has_issues": {
            "type": "boolean"
        },
        "has_projects": {
            "type": "boolean"
        },
        "has_downloads": {
            "type": "boolean"
        },
        "has_wiki": {
            "type": "boolean"
        },
        "has_pages": {
            "type": "boolean"
        },
        "has_discussions": {
            "type": "boolean"
        },
        "forks_count": {
            "type": "integer"
        },
        "mirror_url": {
            "type": "null"
        },
        "archived": {
            "type": "boolean"
        },
        "disabled": {
            "type": "boolean"
        },
        "open_issues_count": {
            "type": "integer"
        },
        "license": {
            "type": "object",
            "properties": {
                "key": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "spdx_id": {
                    "type": "string"
                },
                "url": {
                    "type": "null"
                },
                "node_id": {
                    "type": "string"
                }
            },
            "required": [
                "key",
                "name",
                "spdx_id",
                "url",
                "node_id"
            ]
        },
        "allow_forking": {
            "type": "boolean"
        },
        "is_template": {
            "type": "boolean"
        },
        "web_commit_signoff_required": {
            "type": "boolean"
        },
        "topics": {
            "type": "array",
            "items": [
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                }
            ]
        },
        "visibility": {
            "type": "string"
        },
        "forks": {
            "type": "integer"
        },
        "open_issues": {
            "type": "integer"
        },
        "watchers": {
            "type": "integer"
        },
        "default_branch": {
            "type": "string"
        },
        "temp_clone_token": {
            "type": "null"
        },
        "network_count": {
            "type": "integer"
        },
        "subscribers_count": {
            "type": "integer"
        }
    },
    "required": [
        "id",
        "node_id",
        "name",
        "full_name",
        "private",
        "owner",
        "html_url",
        "description",
        "fork",
        "url",
        "forks_url",
        "keys_url",
        "collaborators_url",
        "teams_url",
        "hooks_url",
        "issue_events_url",
        "events_url",
        "assignees_url",
        "branches_url",
        "tags_url",
        "blobs_url",
        "git_tags_url",
        "git_refs_url",
        "trees_url",
        "statuses_url",
        "languages_url",
        "stargazers_url",
        "contributors_url",
        "subscribers_url",
        "subscription_url",
        "commits_url",
        "git_commits_url",
        "comments_url",
        "issue_comment_url",
        "contents_url",
        "compare_url",
        "merges_url",
        "archive_url",
        "downloads_url",
        "issues_url",
        "pulls_url",
        "milestones_url",
        "notifications_url",
        "labels_url",
        "releases_url",
        "deployments_url",
        "created_at",
        "updated_at",
        "pushed_at",
        "git_url",
        "ssh_url",
        "clone_url",
        "svn_url",
        "homepage",
        "size",
        "stargazers_count",
        "watchers_count",
        "language",
        "has_issues",
        "has_projects",
        "has_downloads",
        "has_wiki",
        "has_pages",
        "has_discussions",
        "forks_count",
        "mirror_url",
        "archived",
        "disabled",
        "open_issues_count",
        "license",
        "allow_forking",
        "is_template",
        "web_commit_signoff_required",
        "topics",
        "visibility",
        "forks",
        "open_issues",
        "watchers",
        "default_branch",
        "temp_clone_token",
        "network_count",
        "subscribers_count"
    ]
}
