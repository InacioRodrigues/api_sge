/*
  Warnings:

  - You are about to drop the column `className` on the `Class` table. All the data in the column will be lost.
  - Added the required column `name` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Class" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "academicYear" INTEGER NOT NULL
);
INSERT INTO "new_Class" ("academicYear", "course", "id") SELECT "academicYear", "course", "id" FROM "Class";
DROP TABLE "Class";
ALTER TABLE "new_Class" RENAME TO "Class";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
