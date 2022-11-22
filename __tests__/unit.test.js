// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNumber: true', () => {

    expect(functions.isPhoneNumber("(213) 327-7685")).toBe(true);

});

test('isPhoneNumber: true', () => {

    expect(functions.isPhoneNumber("(213) 327-7686")).toBe(true);

});

test('isPhoneNumber: false', () => {

    expect(functions.isPhoneNumber(2)).toBe(false);

});

test('isPhoneNumber: false', () => {

    expect(functions.isPhoneNumber(1)).toBe(false);

});

test('isEmail: true', () => {

    expect(functions.isEmail("mreta@ucsd.edu")).toBe(true);

});

test('isEmail: true', () => {

    expect(functions.isEmail("mceta@ucsd.edu")).toBe(true);

});

test('isEmail: false', () => {

    expect(functions.isEmail(1)).toBe(false);

});

test('isEmail: false', () => {

    expect(functions.isEmail(2)).toBe(false);

});

test('isStrongPassword: true', () => {

    expect(functions.isStrongPassword("Marcreta")).toBe(true);

});

test('isStrongPassword: true', () => {

    expect(functions.isStrongPassword("Marcisawesome")).toBe(true);

});

test('isStrongPassword: false', () => {

    expect(functions.isStrongPassword("2")).toBe(false);

});

test('isStrongPassword: false', () => {

    expect(functions.isStrongPassword("5")).toBe(false);

});

test('isDate: true', () => {

    expect(functions.isDate("2/26/2002")).toBe(true);

});

test('isDate: true', () => {

    expect(functions.isDate("4/25/2022")).toBe(true);

});

test('isDate: false', () => {

    expect(functions.isDate("2")).toBe(false);

});

test('isDate: false', () => {

    expect(functions.isDate("4")).toBe(false);

});

test('isHexColor: true', () => {

    expect(functions.isHexColor("#e34545")).toBe(true);

});

test('isHexColor: true', () => {

    expect(functions.isHexColor("#e34546")).toBe(true);

});

test('isHexColor: false', () => {

    expect(functions.isHexColor("2")).toBe(false);

});

test('isHexColor: false', () => {

    expect(functions.isHexColor("3")).toBe(false);

});