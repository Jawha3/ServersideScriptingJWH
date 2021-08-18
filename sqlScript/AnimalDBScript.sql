USE Master
GO

CREATE DATABASE AnimalDB;
GO

USE AnimalDB;
GO

CREATE TABLE Animal(ID INT PRIMARY KEY IDENTITY(1,1), [Name] NVARCHAR(255), Color NVARCHAR(255));
GO

