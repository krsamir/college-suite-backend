CREATE DATABASE  IF NOT EXISTS `college` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `college`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: college
-- ------------------------------------------------------
-- Server version	5.7.31-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_master`
--

DROP TABLE IF EXISTS `admin_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `admin_name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `organization` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_master`
--

LOCK TABLES `admin_master` WRITE;
/*!40000 ALTER TABLE `admin_master` DISABLE KEYS */;
INSERT INTO `admin_master` VALUES (1,'admin','admin','admin','SOA','admin');
/*!40000 ALTER TABLE `admin_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance_master`
--

DROP TABLE IF EXISTS `attendance_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniqueid` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `regd_no` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `section` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `current_semester` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniqueid_UNIQUE` (`uniqueid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance_master`
--

LOCK TABLES `attendance_master` WRITE;
/*!40000 ALTER TABLE `attendance_master` DISABLE KEYS */;
INSERT INTO `attendance_master` VALUES (1,'22/05/2021-student','student','student','CSE','A','2021-05-22','7:22:34 PM',1),(4,'22/05/2021-student1','student1','student1','CSE','A','2021-05-22','7:23:00 PM',7),(5,'22/05/2021-student3','student3','student3','EE','B','2021-05-22','7:23:17 PM',1),(6,'22/05/2021-student2','student2','student2','CSE','B','2021-05-22','7:25:40 PM',5),(11,'23/05/2021-student','student','student','CSE','A','2021-05-23','7:22:34 PM',1),(12,'24/05/2021-student','student','student','CSE','A','2021-05-24','7:22:34 PM',1),(13,'25/05/2021-student','student','student','CSE','A','2021-05-25','7:22:34 PM',1),(15,'27/05/2021-student','student','student','CSE','A','2021-05-27','7:22:34 PM',1),(16,'28/05/2021-student','student','student','CSE','A','2021-05-28','7:22:34 PM',1),(20,'26/05/2021-student','student','student','CSE','A','2021-05-26','8:00:13 PM',1),(22,'08/06/2021-student','student','student','CSE','A','2021-06-08','10:15:04 AM',1),(25,'08/06/2021-student1','student1','student1','CSE','A','2021-06-08','4:49:48 PM',7),(26,'08/06/2021-student2','student2','student2','CSE','B','2021-06-08','4:50:16 PM',5),(28,'09/06/2021-student','student','student','CSE','A','2021-06-09','8:11:28 AM',1);
/*!40000 ALTER TABLE `attendance_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dept_id` varchar(45) DEFAULT NULL,
  `dept_name` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dept_id_UNIQUE` (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'100','CSE','admin','1'),(2,'101','CS-IT','admin','1'),(3,'102','EE','admin','1'),(4,'103','EEE','admin','1'),(5,'104','MECHANICAL','admin','1'),(6,'105','Civil','admin','1');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department_section`
--

DROP TABLE IF EXISTS `department_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department_section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(50) DEFAULT NULL,
  `subject_name` varchar(45) DEFAULT NULL,
  `section` varchar(45) DEFAULT NULL,
  `allocated_teacher` varchar(45) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `subjectCode` varchar(45) DEFAULT NULL,
  `sectionadmin` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_section`
--

LOCK TABLES `department_section` WRITE;
/*!40000 ALTER TABLE `department_section` DISABLE KEYS */;
INSERT INTO `department_section` VALUES (1,'CSE','Introduction to Programming','A','teacher',1,'100','teacher'),(2,'CSE','Data Structure','A','teacher1',1,'101','teacher'),(3,'CSE','Communication','A','teacher',1,'104','teacher'),(4,'CSE','Compliance Training','A','teacher',1,'105','teacher'),(5,'CSE','Technical Works','A','teacher',1,'106','teacher'),(6,'CSE','Introduction to Programming','B','teacher',1,'100','teacher1'),(7,'CSE','Data Structure','B','teacher',1,'101','teacher1'),(8,'CSE','Communication','B','teacher',1,'104','teacher1'),(9,'CSE','Compliance Training','B','teacher',1,'105','teacher1'),(10,'CSE','Technical Works','B','teacher',1,'106','teacher1'),(16,'EE','Data Structure','A','teacher',1,'101','teacher'),(17,'EE','Communication','A','teacher',1,'104','teacher'),(18,'EE','Compliance Training','A','teacher',1,'105','teacher'),(19,'EE','Technical Works','A','teacher',1,'106','teacher'),(20,'EE','Data Structure','B','teacher',1,'101','teacher'),(21,'EE','Communication','B','teacher1',1,'104','teacher'),(22,'EE','Compliance Training','B','teacher1',1,'105','teacher'),(23,'EE','Technical Works','B','teacher1',1,'106','teacher'),(25,'MECHANICAL','AeroDynamics','A','teacher1',1,'102','teacher1'),(26,'MECHANICAL','Thermodynamics','A','teacher1',1,'103','teacher1'),(27,'MECHANICAL','Communication','A','teacher1',1,'104','teacher1'),(28,'MECHANICAL','Compliance Training','A','teacher1',1,'105','teacher1'),(29,'MECHANICAL','Technical Works','A','teacher1',1,'106','teacher1'),(30,'CSE','Introduction to Programming','C','teacher1',1,'100','teacher'),(31,'CSE','Data Structure','C','teacher1',1,'101','teacher'),(32,'CSE','Communication','C','teacher1',1,'104','teacher'),(33,'CSE','Compliance Training','C','teacher1',1,'105','teacher'),(34,'CSE','Technical Works','C','teacher1',1,'106','teacher'),(56,'CSE','Introduction to Programming','D','teacher1',1,'100','teacher1'),(57,'CSE','Data Structure','D','teacher1',1,'101','teacher1'),(58,'CSE','Communication','D','teacher1',1,'104','teacher1'),(59,'CSE','Compliance Training','D','teacher1',1,'105','teacher1'),(60,'CSE','Technical Works','D','teacher1',1,'106','teacher1'),(68,'MECHANICAL','AeroDynamics','B',NULL,1,'102','teacher1'),(69,'MECHANICAL','Thermodynamics','B',NULL,1,'103','teacher1'),(70,'MECHANICAL','Communication','B',NULL,1,'104','teacher1'),(71,'MECHANICAL','Compliance Training','B',NULL,1,'105','teacher1'),(72,'MECHANICAL','Technical Works','B',NULL,1,'106','teacher1'),(73,'CSE','Introduction to Programming','E','test test',1,'100',NULL),(74,'CSE','Data Structure','E',NULL,1,'101',NULL),(75,'CSE','Communication','E',NULL,1,'104',NULL),(76,'CSE','Compliance Training','E',NULL,1,'105',NULL),(77,'CSE','Technical Works','E',NULL,1,'106',NULL);
/*!40000 ALTER TABLE `department_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(200) DEFAULT NULL,
  `body` varchar(2000) DEFAULT NULL,
  `created_by` varchar(45) NOT NULL,
  `last_updated_at` varchar(30) DEFAULT NULL,
  `status` varchar(45) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (3,'Status','This application is under development.','admin','4/30/2021, 9:41:44 AM','1'),(4,'Team','Samir and Chandan','admin','4/9/2021, 8:32:17 PM','1'),(14,'Holiday','There will be holiday  on (26th) Republic day.','admin','5/20/2021, 8:39:43 PM','1'),(22,'Checking status','default','admin','4/9/2021, 8:32:17 PM','0'),(23,'Holidays','Aditya','admin','5/6/2021, 2:12:15 PM','0'),(24,'Today','Friday','admin','5/20/2021, 8:39:43 PM','0'),(25,'900','Demo of project','admin','5/26/2021, 6:40:14 PM','0'),(26,'Tomorrow','Holiday','admin','6/5/2021, 6:46:40 PM','1');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owner_master`
--

DROP TABLE IF EXISTS `owner_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `owner_name` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT 'owner',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner_master`
--

LOCK TABLES `owner_master` WRITE;
/*!40000 ALTER TABLE `owner_master` DISABLE KEYS */;
INSERT INTO `owner_master` VALUES (1,'owner','owner',NULL,'owner','owner');
/*!40000 ALTER TABLE `owner_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position_table`
--

DROP TABLE IF EXISTS `position_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `position_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position_id` varchar(45) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `position_id_UNIQUE` (`position_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position_table`
--

LOCK TABLES `position_table` WRITE;
/*!40000 ALTER TABLE `position_table` DISABLE KEYS */;
INSERT INTO `position_table` VALUES (1,'100','Faculty','admin','1'),(2,'101','Trainer','admin','1'),(3,'102','HOD','admin','1'),(4,'103','Lab Assistant','admin','1'),(5,'104','Examiner','admin','1'),(7,'106','Junior Trainee','admin','1'),(9,'110','Senior Trainee','admin','1'),(10,'a','a','admin','0'),(11,'b','b','admin','1');
/*!40000 ALTER TABLE `position_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_master`
--

DROP TABLE IF EXISTS `student_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `regd_no` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `year_of_joining` int(11) DEFAULT NULL,
  `current_semester` int(11) DEFAULT NULL,
  `section` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_master`
--

LOCK TABLES `student_master` WRITE;
/*!40000 ALTER TABLE `student_master` DISABLE KEYS */;
INSERT INTO `student_master` VALUES (1,'student1','student1','CSE','student1','12345',2017,7,'A'),(3,'student2','student2','CSE','student2','12345',2018,5,'B'),(4,'student3','student3','EE','student3','12345',2019,1,'B'),(5,'student','student','CSE','student','12345',2020,1,'A'),(6,'student','student','CSE','student','12345',2021,9,'C'),(7,'student','student','CSE','student','12345',2021,-1,'D');
/*!40000 ALTER TABLE `student_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject_master`
--

DROP TABLE IF EXISTS `subject_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subjectCode` varchar(10) DEFAULT NULL,
  `subjectName` varchar(45) DEFAULT NULL,
  `semester` int(11) DEFAULT NULL,
  `isActive` tinyint(4) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT 'PENDING',
  `created_by` varchar(45) DEFAULT NULL,
  `last_updated_at` varchar(45) DEFAULT NULL,
  `approved_once` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subjectCode_UNIQUE` (`subjectCode`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject_master`
--

LOCK TABLES `subject_master` WRITE;
/*!40000 ALTER TABLE `subject_master` DISABLE KEYS */;
INSERT INTO `subject_master` VALUES (1,'100','Introduction to Programming',1,1,'CSE,CS-IT','APPROVED','teacher','4/30/2021, 9:41:44 AM','1'),(2,'101','Data Structure',1,1,'CSE,CS-IT,EEE,EE','APPROVED','teacher','4/30/2021, 9:41:44 AM','1'),(3,'102','AeroDynamics',1,1,'MECHANICAL,Civil','APPROVED','teacher','4/30/2021, 9:41:44 AM','1'),(4,'103','Thermodynamics',1,1,'MECHANICAL,Civil','APPROVED','teacher','4/30/2021, 9:41:44 AM','1'),(5,'104','Communication',3,1,'CSE,CS-IT,EE,EEE,MECHANICAL','APPROVED','teacher','4/30/2021, 9:41:44 AM','1'),(6,'105','Compliance Training',1,1,'CSE,CS-IT,EEE,EE,MECHANICAL,Civil','APPROVED','teacher','4/30/2021, 9:41:44 AM','1'),(7,'106','Technical Works',7,1,'CSE,CS-IT,EE,EEE,MECHANICAL,Civil','APPROVED','teacher','5/10/2021, 12:46:26 AM','1');
/*!40000 ALTER TABLE `subject_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_master`
--

DROP TABLE IF EXISTS `teacher_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `date_of_joining` varchar(45) DEFAULT NULL,
  `isHod` tinyint(4) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `last_updated_at` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employee_id_UNIQUE` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_master`
--

LOCK TABLES `teacher_master` WRITE;
/*!40000 ALTER TABLE `teacher_master` DISABLE KEYS */;
INSERT INTO `teacher_master` VALUES (1,'teacher','teacher','teacher','999999999','HOD','CSE,CS-IT','2021-04-05',1,'admin','4/12/2021, 7:49:25 PM'),(2,'teacher1','teacher1','teacher1','55555','Lab Assistant,Junior Trainee','CSE,CS-IT','2021-04-14',0,'admin','4/13/2021, 9:21:21 AM'),(3,'1622038088304','test test','1622038088304','7079583248','Trainer','EE,CS-IT','2021-05-27',1,'admin','5/26/2021, 6:40:14 PM');
/*!40000 ALTER TABLE `teacher_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uploadtable`
--

DROP TABLE IF EXISTS `uploadtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uploadtable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `regd_no` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `subjectCode` varchar(45) DEFAULT NULL,
  `subject_name` varchar(45) DEFAULT NULL,
  `semester` varchar(45) DEFAULT NULL,
  `filename` varchar(200) DEFAULT NULL,
  `section` varchar(45) DEFAULT NULL,
  `mimetype` varchar(45) DEFAULT NULL,
  `uploadedat` varchar(45) DEFAULT NULL,
  `totalmarks` varchar(45) DEFAULT NULL,
  `assignedmarks` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='regd_no, department, subjectName, semester, section';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uploadtable`
--

LOCK TABLES `uploadtable` WRITE;
/*!40000 ALTER TABLE `uploadtable` DISABLE KEYS */;
INSERT INTO `uploadtable` VALUES (1,'student','CSE','100','Introduction to Programming','1','1623206733364-student-Introduction to Programming-CSE-A-1-Assignment 1.pdf','A','application/octet-stream','6/9/2021, 7:56:04 AM','100','95');
/*!40000 ALTER TABLE `uploadtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'college'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-09  8:19:45
