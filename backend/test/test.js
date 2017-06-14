/**
 * Created by todd.kim on 2017-06-14.
 */

var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

describe('비동기 코드 테스트', function () {
    describe('#setTimeout', function () {
        it('2초 이내에 완료되지 않으면 실패', function (done) {
            setTimeout(function () {
                done();
            }, 1000);
        });
    });
});

describe('다양한 hooks 방법', function() {
    before(function() {
        // 이 블록 내의 테스트들을 실행하기에 앞서 한번 실행되는 부분
    });

    after(function() {
        // 이 블록 내의 테스트들을 모두 실행한 후에 한번 실행되는 부분
    });

    beforeEach(function() {
        // 이 블록 내의 각 테스트들이 실행되기 전에 실행
    });

    afterEach(function() {
        // 이 블록 내의 각 테스트들이 실행된 후에 실행
    });

    // test cases
});