# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

#usersテーブル
|Column|Type|Options|
|name|text|null: false, foreign_key: true|

## Association
-has_many:groups, through:groups_users
-has_many:messege


#groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false,  true|

## Association
-has_many:messeges　
-has_many:user,  through:groups_users


#messegesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|null: false, foreign_key: true|
|group_id|null: false, foreign_key: true|
|content|-----|------|
|imabe|-----|-----|

## Association
-belongs_to :group
- belongs_to :user


# groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key:true|

## Association
- belongs_to :group
- belongs_to :user