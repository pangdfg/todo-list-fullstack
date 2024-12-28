package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username     string `gorm:"unique;not null" json:"username"`
	Password     string `gorm:"not null" json:"password"`
	ProfileImage string `json:"profile_image"`
	Todos        []Todo `gorm:"foreignKey:UserID"` // Add one-to-many relationship
}
