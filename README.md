# attendance
database name:attendance
tables:
 1.user  | CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `contactNo` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |

2. attendance | CREATE TABLE `attendance` (
  `userId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `present` tinyint(1) DEFAULT NULL,
  `reason` varchar(250) DEFAULT NULL,
  KEY `userId` (`userId`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
